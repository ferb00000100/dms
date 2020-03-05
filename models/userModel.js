const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(

	{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required:true
		},
		userName: {
			type: String,
			required: true
		},
		accessID: {
			type: String,
			required: true
		},
		secretID: {
			type: String,
			required: true
		},
		documents: {
			type: [],
			default: undefined
	},

});

const User = mongoose.model("User", userSchema);

module.exports = User;
