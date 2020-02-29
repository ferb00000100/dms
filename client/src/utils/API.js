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
	login: function() {
		return axios.delete("/api/login/");
	},
	saveUser: function(inputs) {
		return axios.post("/api/signup",inputs);
	}
};

