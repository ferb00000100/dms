const express = require("express");
const router = express.Router();
require('dotenv').config();
const AWS = require("aws-sdk");
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new AWS.S3 ({
	accessKeyId: process.env.ACCESSKEY,
	secretAccessKey: process.env.SECRET
});

const upload = multer({
	storage: multerS3({
		s3: s3,
		bucket: "docusys",
		metadata: function (req, file, cb) {
			cb(null, {fieldName: file.fieldname});
		},
		key: function (req, file, cb) {
			// console.log("THIS IS THE FILE",file);
			cb(null,  file.originalname); //use Date.now() for unique file keys
		}
	})
});

router.post("/", upload.single('myUpload'), function (req, res, next) {
	// res.send("Upload Successful");
	res.redirect('/uploads');

});

module.exports = router;


