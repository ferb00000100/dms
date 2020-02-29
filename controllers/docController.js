const AWS = require('aws-sdk');
require('dotenv').config();

//TODO process.env is not working
const ID = "";
const SECRET = "";
const BUCKET = "";

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