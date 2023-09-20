import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginRegForm from "../components/LoginRegForm";

import { useState } from "react";

const Login = () => {
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const loginUser = (auth, userData) => {
		console.log(userData);
		signInWithEmailAndPassword(auth, userData.email, userData.password)
			.then((userCredential) => {
				const loggedInUser = userCredential.user;
				console.log(loggedInUser);
				setError("");
				loginUser(userData)
					.then((user) => {
						dispatch({ type: "LOGIN", payload: user });
						localStorage.setItem("user", JSON.stringify(user));
						navigate("/home");
					})
					.catch((err) => console.log(err));
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				console.log("Firebase login error caught");
				setError("Invalid Email/Password");
			});
	};

	return (
		<LoginRegForm
			btnLabel={"Login"}
			cardLabel={"Login to [Array]"}
			linkLabel={"Need an Account? Register"}
			link={"register"}
			error={error}
			submitFunc={loginUser}
		/>
	);
};

export default Login;
