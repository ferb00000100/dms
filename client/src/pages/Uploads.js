import React from "react";
import { Col } from "reactstrap";
import Uploads from "../components/Uploads"

const UploadPage = () => {

	const fs = require('fs');
	const AWS = require('aws-sdk');
	require('dotenv').config();

	//TODO
	// process.env is not working
	const ID = process.env.APIACCESSID;
	const SECRET = process.env.APISECRETKEY;
	const BUCKET_NAME = process.env.BUCKETNAME;

	const s3 = new AWS.S3 ({
		accessKeyId: ID,
		secretAccessKey: SECRET,
		Bucket: BUCKET_NAME
	});


	const uploadFile = (fileName) => {
		// Read content from the file
		const fileContent = fs.readFileSync(fileName);

		// Setting up S3 upload parameters
		const params = {
			Bucket: BUCKET_NAME,
			Key: 'profile.jpg', // Need to get this from input which is the file name to save as
			Body: fileContent
		};

		// Uploading files to the bucket
		s3.upload(params, function(err, data) {
			if (err) {
				throw err;
			}
			console.log(`File uploaded successfully. ${data.Location}`);
		});
	};

	//TODO Needs to be called on button click "choose file" below
	// uploadFile("profile_white.jpg");

	return (
		<>
			<Uploads />
			<Col sm="12" md={{ size: 8, offset: 2 }}>
			<div className="mt-3 form-group">
				<div className="input-group mb-3">
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="inputGroupFile02"></input>
						<label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
					</div>
					<div className="input-group-append">
						<span className="input-group-text" id="">Upload</span>
					</div>
				</div>
			</div>
			</Col>

		</>
	)

}

export default UploadPage;