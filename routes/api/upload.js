
//TODO tried One Billion ways to get this to upload the file correctly and it still isn't working.  Need to continue to investigate.
const router = require("express").Router();
const AWS = require('aws-sdk');
// const fs =require('fs');

router.post("/", function (req, res) {
	const file = (req.body[0].filename);
	const bucket = req.body[0].bucket;
	const bucketId = req.body[0].id;
	const secret = req.body[0].secret;

	const s3 = new AWS.S3 ({
		accessKeyId: bucketId,
		secretAccessKey: secret
	});

	// const fileContent = fs.readFileSync(file);

	s3.putObject({
		Bucket: bucket,
		Key: 'test_'+file,
		Body: file
	}, function (resp) {
	 	console.log(arguments);

	 });

});

module.exports = router;
