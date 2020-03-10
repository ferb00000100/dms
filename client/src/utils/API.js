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
	download: function(fileKey, awsId, secret, bucket) {
		const data = [{key:fileKey, ID:awsId, SECRET:secret, BUCKET:bucket}]
		// console.log("my data", data);
		return axios.post("/api/download/",data);
	},
	// Upload
	upload: function(fileName, awsId, secret, bucket) {
		const data = [{filename: fileName, ID: awsId, SECRET: secret, BUCKET: bucket}]
		return axios.post("/api/upload/", data);
	},
	// Add Users
	saveUser: function(inputs) {
		const file = inputs.documents.split("C:").join(',').split('\\').join(',').split(',').pop();
		inputs.documents = file;
		// console.log(inputs.documents)
		return axios.post("/api/signup",inputs);
	}
};

