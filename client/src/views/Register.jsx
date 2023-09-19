import { createUserWithEmailAndPassword } from "firebase/auth";
import LoginRegForm from "../components/LoginRegForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Register = () => {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);

	const registerUser = (auth, userData) => {
		createUserWithEmailAndPassword(auth, userData.email, userData.password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				const newUser = {
					name: userData.name,
					username: userData.username,
					email: userData.email,
					firebaseUid: user.uid,
					accessToken: user.accessToken,
					followers: [],
					follows: [],
					posts: []
				};
				dispatch({ type: "LOGIN", payload: newUser });
				localStorage.setItem("user", JSON.stringify(newUser));
				createUser(newUser);
				navigate("/home");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	const createUser = async (userData) => {
		await setDoc(doc(db, "users", userData.firebaseUid), userData);
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
