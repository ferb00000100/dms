const router = require("express").Router();
const fs = require('fs');
const AWS = require('aws-sdk');
const path = require('path');


router.post("/", (req, res) => {
	const fileKey = req.body[0].key;
	const BUCKET = req.body[0].BUCKET;
	const ID = req.body[0].ID;
	const SECRET = req.body[0].SECRET;
	const filePath = fileKey;
	const s3 = new AWS.S3 ({
		accessKeyId: ID,
		secretAccessKey: SECRET,
		Bucket: BUCKET,
		S3BL_IGNORE_PATH: true
	});

		AWS.config.update(
			{
				accessKeyId: ID,
				secretAccessKey: SECRET,
				region: 'us-east-1'
			}
		);

	const downloadFile = (filePath, bucket, key) => {
		return new Promise((resolve, reject) => {
			const destPath = `/tmp/${path.basename(key)}`
			const params = {
				Bucket: bucket,
				Key: key
			};
			s3.getObject(params)
				.createReadStream()
				.pipe(fs.createWriteStream(destPath))
				.on('close', () => {
					resolve(destPath)
				})
		})
	}
	//
// 	const file = require('fs').createWriteStream(filePath);
//
// 		const params = {
// 		Bucket: bucket,
// 		Key: key
// 	};
// 		 s3.getObject(params, (err, data) => {
// 		if (err) console.error(err);
// 	        file.write(data.Body, () => {
// 	        	file.end();
// 	        });
// 			fs.writeFileSync(filePath, data.Body);
// 		// fs.createWriteStream(filePath, data.Body);
// 		// fs.createReadStream(filePath, data.Body);
// 			 console.log(data);
// 			console.log(`${filePath} has been created!`);
// 	});
// //
// };
	downloadFile(filePath, BUCKET, fileKey);

});

module.exports = router;


