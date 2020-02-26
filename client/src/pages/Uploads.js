import React, { useState } from "react";
import { Col } from "reactstrap";
import Uploads from "../components/Uploads"
const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config();

const UploadPage = () => {


	//TODO
	// process.env is not working
	const ID = "AKIAWTPM6HMO275KQYP7";
	const SECRET = "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";
	const BUCKET_NAME = "docusys";

	const s3 = new AWS.S3 ({
		accessKeyId: ID,
		secretAccessKey: SECRET,
		Bucket: BUCKET_NAME
	});

	const [file, setFile] = useState({
		fileName: ""
	});

	const { fileName } = file;


	const uploadFile = (fileName) => {
		// The fileName comes across with "C:\fakepath\"  We need to strip this out of the file name
		const file = fileName.split("C:").join(',').split('\\').join(',').split(',').pop();
		console.log("file to Name is", file);
		console.log("file to Upload is", fileName);

		// Setting up S3 upload parameters
		const params = {
			Bucket: "docusys",
			Key: file,
			Body: fileName
		};

		// Uploading files to the bucket
		s3.upload(params, function(err, data) {
			if (err) {
				throw err;
			}
			console.log(`File uploaded successfully. ${data.Location}`);
		});
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setFile({ ...fileName, [name]: value
		})
	};
	const handleFormSubmit = e => {
		console.log("This is the filename", fileName)
		uploadFile(fileName);
	}


	//TODO Needs to be called on button click "choose file" below
	// uploadFile("profile_white.jpg");

	return (
		<>
			<Uploads />
			<Col sm="12" md={{ size: 8, offset: 2 }}>
			<div className="mt-3 form-group">
				<div className="input-group mb-3">
					<div className="custom-file">
						<input
							type="file"
							name="fileName"
							className="custom-file-input"
							id="inputGroupFile02"
							value={fileName}
							onChange={handleInputChange}
						/>

						{/*TODO Need File Name to appear in Browser once Selected*/}
						<label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
					</div>
					<div className="input-group-append">
						<button className="input-group-text" id="" onClick={handleFormSubmit}>Upload</button>
					</div>
				</div>
			</div>
			</Col>

		</>
	)

}

export default UploadPage;