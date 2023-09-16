import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginRegForm from "../components/LoginRegForm";
import { useState } from "react";

const Login = () => {
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const loginUser = (auth, email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				setError("");
				navigate("/home");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
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
