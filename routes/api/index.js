const router = require("express").Router();
const userRoutes = require("./users");
const signupRoutes = require("./signup");
const loginRoutes = require("./login");

// User routes

router.use("/api/signup", signupRoutes);
router.use("/api/users", userRoutes);
router.use("/api/login", loginRoutes);

module.exports = router;
