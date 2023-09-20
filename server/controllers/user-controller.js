import User from "../models/user-model.js";

async function registerUser(req, res) {
	try {
		const user = await User.create(req.body);
		res.status(201).json(user);
	} catch (err) {
		console.log(err);
		res.status(422).json(err);
	}
}

async function loginUser(req, res) {
	try {
		const { email } = req.body;
		console.log(email);
		const user = await User.findOne({ email });

		if (!user) {
			console.log("Email incorrect.");
			return res.status(400).json({ errors });
		}

		res.status(200).json(user);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
}

async function getAllUsers(req, res) {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
}

export { registerUser, loginUser, getAllUsers };
