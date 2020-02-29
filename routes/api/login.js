const router = require("express").Router();
const User = require("../../models/userModel");
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

router.post('/login',
	passport.authenticate('local', { successRedirect: '/api/login',
		failureRedirect: '/login',
		failureFlash: true })
);


passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'passwd'
},
	function(username, password, done) {
		User.findOne({ username: username }, function(err, user) {
			if (err) { return done(err); }
			if (!user) {
				return done(null, false, { message: 'Incorrect username.' });
			}
			if (!user.validPassword(password)) {
				return done(null, false, { message: 'Incorrect password.' });
			}
			return done(null, user);
		});
	}
));

module.exports = router