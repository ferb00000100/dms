const router = require("express").Router();
const AWS = require('aws-sdk');

router.post("/", function (req, res) {
	const file = (req.body[0].filename);
	const bucket = req.body[0].BUCKET;
	const bucketId = req.body[0].ID;
	const secret = req.body[0].SECRET;

	const s3 = new AWS.S3 ({
		accessKeyId: bucketId,
		secretAccessKey: secret,
		Bucket: bucket,
		apiVersion: '2006-03-01',
		signatureVersion: "v4"
	});

	const params = {
		Bucket: "docusys",
		Key: file,
		Body: file
	};

	s3.putObject(params, function (err, data) {
		if (err) {
			console.log("Error: ", err);
		} else {
			console.log(data);
		}
	});
	// res.redirect("/uploads");
});

module.exports = router;
