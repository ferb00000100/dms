import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import Downloads from "../components/Downloads"
import Navbar from "../components/NavBar";
import API from "../utils/API";
import {Anchor, Headers} from "../styles"
import UserDetails from "../components/UserDetails";
const fs = require('fs');


const DownloadPage = () => {
	const AWS = require('aws-sdk/global');

	const [awsFiles, setAwsFiles] = useState({
		files: []
	})

	const [awsData, setAwsData] = useState({
		data: []
	});

	const { files } = awsFiles;
	const { data } = awsData;

	const ID = data.accessID
	const SECRET = data.secretID
	const BUCKET_NAME = "docusys";

	const s3 = new AWS.S3 ({
		accessKeyId: ID,
		secretAccessKey: SECRET,
		Bucket: BUCKET_NAME,
		S3BL_IGNORE_PATH: true
	});

	const getKeys = (userName) => {
		API.getUserKey(userName)
			.then(res => {
				if (!res) return;
				setAwsData({
					data: res.data[0]
				});
			})
			.catch(err => console.log("Error Getting Keys", err))
	}

	useEffect(() => {
		getKeys("jmartin")
	}, []);

	const params = {
		Bucket: 'docusys',
		MaxKeys: 5,
		EncodingType: "url",
	};

	const listFiles = () => {
		s3.listObjects(params, (err, data) => {
			if (err) {
				return (err);
			} else {
				setAwsFiles({
					files: data.Contents
				});
				console.log("this is my data",data.Contents);
				// console.log("This is files", files);
			}
		});
	}


	return (
		<>
			<Headers>
				<h1>DMS Downloads</h1>
			</Headers>

			<Col sm="12" md={{ size: 10, offset: 2 }}>
				<Navbar/>
				<div className="input-group-append">
					<button className="input-group-text" name="files" id="" onClick={listFiles}>Show Files</button>
				</div>

						{files.length  ? (
							<>
								{files.map(file => (
								<Downloads
								Name={file.Key}

								/>
								))}
				</>
							):(

							<div className="d-flex loading-spinner">
								<div className="spinner-border" role="status">
									<span className="sr-only">Loading...</span>
								</div>
							</div>
							)}
			</Col>
			</>
	)
}

export default DownloadPage;

