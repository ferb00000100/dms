const AWS = require("aws-sdk");
require('dotenv').config();

const ID = process.env.APIACCESSID;
const SECRET = process.env.APISECRETKEY;
const BUCKET_NAME = process.env.BUCKETNAME;

const s3 = new AWS.S3 ({
	accessKeyId: ID,
	secretAccessKey: SECRET
});

const params = {
	Bucket: BUCKET_NAME,
};

s3.createBucket(params, function(err, data) {
	if (err) console.log(err, err.stack);
	else console.log('Bucket Created Successfully', data.Location);
});