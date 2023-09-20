import { createUserWithEmailAndPassword } from "firebase/auth";
import LoginRegForm from "../components/LoginRegForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/user-service";

const Register = () => {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const createUser = (auth, userData) => {
		createUserWithEmailAndPassword(auth, userData.email, userData.password)
			.then((userCredential) => {
				// Signed in
				const userID = userCredential.uid;
				const newUser = {
					name: userData.name,
					username: userData.username,
					email: userData.email,
					firebaseUID: userID,
					followers: [],
					follows: []
				};
				console.log("Firebase UID is:", userID, "and type is:", typeof userID);
				registerUser(newUser)
					.then((newUserData) => {
						console.log(newUserData);
						dispatch({ type: "LOGIN", payload: newUserData });
						localStorage.setItem("user", JSON.stringify(newUserData));
						navigate("/home");
					})
					.catch((err) => console.log(err));
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
			submitFunc={createUser}
		/>
	);
};

export default Register;
