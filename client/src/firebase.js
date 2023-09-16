// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAi2ghUrsBXNIUTwaDOtpKo6hwQBK1l73g",
	authDomain: "array-88f42.firebaseapp.com",
	projectId: "array-88f42",
	storageBucket: "array-88f42.appspot.com",
	messagingSenderId: "783257066953",
	appId: "1:783257066953:web:a327f1a480a137ba0d5c18",
	measurementId: "G-C18F2M0REH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export default app;
