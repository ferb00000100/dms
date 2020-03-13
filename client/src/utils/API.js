import axios from "axios";

export default {
	// Gets all Users
	getUsers: function() {
		return axios.get("/api/users");
	},
	// Get user keys
	getUserKey: function(userName) {
		return axios.get("/api/getKey/", userName);
	},
	// Download
	download: function(fileKey) {
		// download: function(fileKey, awsId, secret, bucket) {
		// const data = [{key:fileKey, ID:awsId, SECRET:secret, BUCKET:bucket}]
		// console.log("my data", data);
		return axios.post("/api/download/",fileKey);
	},
	// Upload
	upload: function(file, data) {
		const dataCombine = [{filename: file.name, id: data[0].ID, secret: data[0].SECRET, bucket: data[0].BUCKET_NAME }]
		return axios.post("/api/upload/", dataCombine);
	},
	// Add Users
	saveUser: function(inputs) {
		const file = inputs.documents.split("C:").join(',').split('\\').join(',').split(',').pop();
		inputs.documents = file;
		return axios.post("/api/signup",inputs);
	}
};



