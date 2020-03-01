const router = require("express").Router();
const User = require("../../models/userModel");

router.get("/", (req, res) => {
	User.find({})
		.then(dbUsers => {
			res.json(dbUsers);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

module.exports = router;
