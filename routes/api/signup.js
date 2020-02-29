const router = require("express").Router();
const User = require("../../models/userModel");


router.post("/", (req, res) => {
	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		userName: req.body.userName,
		password: req.body.password,
		accessID: req.body.accessID,
		secretID: req.body.secretID,
	}).then(dbUsers => {
			res.json(dbUsers);
		})
		.catch(err => {
			console.log("Error adding user to database")
			res.status(400).json(err);
		});
});


module.exports = router;
