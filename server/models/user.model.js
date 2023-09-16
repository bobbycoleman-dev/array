const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, "First name is required."],
			minlength: [2, "First name must be at least 2 characters."]
		},
		lastName: {
			type: String,
			required: [true, "Last name is required."],
			minlength: [2, "Last name must be at least 2 characters."]
		},
		username: {
			type: String,
			required: [true, "Username is required."],
			minlength: [2, "Username must be at least 2 characters."],
			unique: true
		},
		email: {
			type: String,
			unique: true
		},
		follows: [UserSchema],
		followers: [UserSchema],
		posts: [PostSchema],
		firebaseUID: {
			type: String
		}
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
