import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Feed from "./Feed";
import Navigation from "./Navigation";
import Users from "./Users";

const Home = () => {
	const [currentUser, setCurrentUser] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
				const uid = user.uid;
				console.log("uid:", uid);
			} else {
				console.log("user is logged out");
			}
		});
	}, []);

	const logoutUser = () => {
		signOut(auth)
			.then(() => {
				navigate("/login");
				console.log("Signed out successfully");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="h-screen max-w-7xl mx-auto px-8 flex flex-col-reverse sm:flex-row sm:gap-4 md:max-xl:px-14 xl:px-16 transition-all ease-in">
			<Navigation />
			<Feed />
			<Users />
		</div>
	);
};

export default Home;