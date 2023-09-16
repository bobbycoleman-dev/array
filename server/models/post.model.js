const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
	language: {
		type: String,
		required: [true, "Please select a language"]
	},
	code: {
		type: String,
		required: [true, "Code block is required for posting."],
		minlength: [5, "Code must be at least 5 characters"]
	},
	description: {
		type: String,
		minlength: [3, "Description must be at least 3 characters."],
		maxlength: [280, "Description cannot be more than 280 characters."]
	},
	poster: UserSchema,
	comments: [
		{
			comment: {
				type: String,
				minlength: [3, "Description must be at least 3 characters."],
				maxlength: [280, "Description cannot be more than 280 characters."]
			},
			commenter: UserSchema
		}
	],
	likes: {
		type: Number
	}
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
