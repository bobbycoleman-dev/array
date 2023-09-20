import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Feed from "./Feed";
import Navigation from "./Navigation";
import Users from "./Users";

const Home = () => {
	const { dispatch } = useContext(AuthContext);
	const [currentUser, setCurrentUser] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				console.log("user is logged out");
			}
		});
	}, []);

	const logoutUser = () => {
		signOut(auth)
			.then(() => {
				dispatch({ type: "LOGOUT" });
				localStorage.setItem("user", "null");
				navigate("/login");
				console.log("Signed out successfully");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="h-screen max-w-[1400px] mx-auto px-2 flex flex-col-reverse sm:flex-row sm:gap-4 md:max-xl:px-16 xl:px-20 transition-all ease-in">
			<Navigation user={currentUser} logoutUser={logoutUser} />
			<Feed />
			<Users />
		</div>
	);
};

export default Home;
