const router = require("express").Router();

router.get("/", (req, res) => {
	res.send(req.isAuthenticated() ? "Logged in" : "Logged out");
});

module.exports = router