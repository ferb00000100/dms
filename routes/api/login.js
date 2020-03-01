const router = require("express").Router();
const User = require("../../models/userModel");
var passport = require("../../config/passport");


router.post("/",(req,res) => {
	console.log(req.body.userName);
	console.log(req.body.password);
})

// router.post('/', passport.authenticate('local'),
// 	function(req, res) {
		// If this function gets called, authentication was successful.
		// `req.user` contains the authenticated user.
		// res.redirect('/users/' + req.user.username);
	// });


// Route for logging user out
// router.get("/logout", function(req, res) {
// 	req.logout();
// 	res.redirect("/");
// });


module.exports = router