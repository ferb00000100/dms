import axios from "axios";

export default {
	// Gets all Users
	getUsers: function() {
		return axios.get("/api/users");
	},
	// Get user keys
	getUserKey: function(id) {
		return axios.get("/api/user/" + id);
	},
	// Login
	login: function(inputs) {
		// console.log(inputs.userName);
		return axios.post("/api/login/",inputs);
	},
	saveUser: function(inputs) {
		return axios.post("/api/signup",inputs);
	}
};

