// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyByKiW6zSrOYnMpyE2Xsrzt8UOBrbYNICI",
	authDomain: "vue-firebase-80473.firebaseapp.com",
	projectId: "vue-firebase-80473",
	storageBucket: "vue-firebase-80473.appspot.com",
	messagingSenderId: "713551225442",
	appId: "1:713551225442:web:2510467f20a8bd3967673b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

auth.ve
