const router = require("express").Router();
const userRoutes = require("./users");
const signupRoutes = require("./signup");
const loginRoutes = require("./login");
const awsAuthRoutes = require("./awsAuth");
const awsDownload = require("./download");
// const awsUpload = require("./upload");
const awsUpload = require("./pushUpload");

// User routes

router.use("/api/upload",awsUpload);
router.use("/api/download",awsDownload);
router.use("/api/getKey", awsAuthRoutes);
router.use("/api/signup", signupRoutes);
router.use("/api/users", userRoutes);
router.use("/api/login", loginRoutes);

module.exports = router;
