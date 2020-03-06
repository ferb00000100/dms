const AWS = require('aws-sdk');

import API from "./API";
import {useEffect} from "react";

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


const ID = data.accessID
const SECRET = data.secretID

const s3 = new AWS ({
	accessKeyId: ID,
	secretAccessKey: SECRET,
	region: 'us-east-1',
});

module.exports = {
	download: function (req, res, next) {
		console.log("Hitting S3");
		// download the file via aws s3 here
		const fileKey = req.query['profile.jpg'];

		console.log('Trying to download file', fileKey);
		const AWS = require('aws-sdk');
		AWS.config.update(
			{
				accessKeyId: ID,
				secretAccessKey: SECRET,
				region: 'us-east-1'
			}
		);
		const s3 = new AWS.S3();
		const options = {
			Bucket: BUCKET,
			Key: fileKey,
		};

		res.attachment(fileKey);
		const fileStream = s3.getObject(options).createReadStream();
		fileStream.pipe(res);
	},
	listDirectories: function (params) {
			return new Promise ((resolve, reject) => {
				const s3params = {
					Bucket: BUCKET,
					MaxKeys: 20,
					Delimiter: '/'
				};
				s3.listObjectsV2 (s3params, (err, data) => {
					if (err) {
						reject (err);
					}
					resolve (data);
				});
			});
		}
};