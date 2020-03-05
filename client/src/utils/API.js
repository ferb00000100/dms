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
	// Login
	login: function() {
		return axios.post("/api/login/");
	},
	// Add Users
	saveUser: function(inputs) {
		const file = inputs.documents.split("C:").join(',').split('\\').join(',').split(',').pop();
		inputs.documents = file;
		// console.log(inputs.documents)
		return axios.post("/api/signup",inputs);
	}
};

