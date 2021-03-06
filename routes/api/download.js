const router = require("express").Router();
const fs = require('fs');
const AWS = require('aws-sdk');
const path = require('path');

router.post("/", (req, res) => {

	const fileKey = req.body[0].key;
	// const BUCKET = req.body[0].BUCKET;
	// const ID = req.body[0].ID;
	// const SECRET = req.body[0].SECRET;
	// const filePath = fileKey;

	const s3 = new AWS.S3 ({
		accessKeyId: process.env.ACCESSKEY,
		secretAccessKey: process.env.SECRET,
		Bucket: "docusys",
		S3BL_IGNORE_PATH: true
	});

	const params = {
		Bucket: "docusys",
		Key: fileKey,
	};
		AWS.config.update(
			{
				accessKeyId: process.env.ACCESSKEY,
				secretAccessKey: process.env.SECRET,
				region: 'us-east-1'
			}
		);
	// const destPath = `/tmp/${path.basename(fileKey)}` // Downloads to /tmp
	const destPath = `/Users/jmartin/Downloads/${path.basename(fileKey)}` // Downloads to /tmp
	s3.getObject(params)
	.createReadStream()
	.pipe(fs.createWriteStream(destPath))
	.on('close', () => {
		console.log("Downloaded to /tmp");
	})

});

module.exports = router;
