const express = require("express");
const passport = require('passport');
const mongoose = require("mongoose");
const routes = require("./routes");
const LocalStrategy = require('passport-local').Strategy;
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// app.use("/", routes);
app.use(passport.initialize());
app.use(passport.session());

// passport config
// const Account = require('./models/account');
// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

// Connect to the Mongo DB Local
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dmsdb");
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

//Connect to Mongo DB Heroku
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// mongoose.connect(MONGODB_URI);

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
