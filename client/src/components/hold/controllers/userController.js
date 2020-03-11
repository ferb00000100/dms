const User = require("../models/userModel");

module.exports = {
	findAll: function(req, res) {
		User.find()
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		User
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	insert: function(req, res) {
		User.insert(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
