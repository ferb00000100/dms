import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import Downloads from "../components/Downloads"
const AWS = require('aws-sdk');
// const fs = require('fs');

require('dotenv').config();

const DownloadPage = () => {

	//TODO
	// process.env is not working

	const ID = "";
	const SECRET = "";
	const BUCKET_NAME = "docusys";

	const AWS = require('aws-sdk/global');

	const s3 = new AWS.S3({
		accessKeyId: ID,
		secretAccessKey: SECRET,
		Bucket: BUCKET_NAME
	});

	const [file, setfile] = useState({
		fileName: ""
	})

	// const {fileName} = file;

	useEffect(() => {
		listFiles();
	}, []);

	const params = {
		Bucket: 'docusys',
		// Delimiter: '',
		// Prefix: '',
		MaxKeys: 5
		// EncodingType: "url",
	};
	const listFiles = () => {
		s3.listObjects(params, (err, data) => {
		// s3.listObjects(params, (err, data)
		// 	.then(res => {
		// 		if (!res) return;
				setfile({
					fileName: data.Contents
				});
			console.log(data.Contents);
		})
		 }
			// .catch(err => console.log("Error Listing Documents, err"))

	// move this to a onclick link
	// listFiles();
	//TODO Needs to be called on button click "choose file" below
	// uploadFile("profile_white.jpg");

	return (
		<>
			<h1>DMS Downloads</h1>
			<Col sm="12" md={{ size: 10, offset: 2 }}>
				<>
				{/*{fileName.length ? (*/}

				{/*	{fileName.map(file => (*/}
						<Downloads
							filename={file}
						/>
					{/*))}*/}
				</>
				{/*) : (*/}
				<div className="d-flex loading-spinner">
					<div className="spinner-border" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
				{/*)}*/}
			</Col>
			</>
	)
}

export default DownloadPage;