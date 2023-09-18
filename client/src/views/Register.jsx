import { createUserWithEmailAndPassword } from "firebase/auth";
import LoginRegForm from "../components/LoginRegForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();
	const registerUser = (auth, email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/home");
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<LoginRegForm
			btnLabel={"Register"}
			cardLabel={"Create an [Array] Account"}
			linkLabel={"Have an Account? Login"}
			link={"login"}
			submitFunc={registerUser}
		/>
	);
};

export default Register;
