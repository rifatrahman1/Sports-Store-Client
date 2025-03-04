// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZs57Zylq66bzQEcu5Vs2ndoejQzMRmZg",
  authDomain: "sports-auth-c2daa.firebaseapp.com",
  projectId: "sports-auth-c2daa",
  storageBucket: "sports-auth-c2daa.firebasestorage.app",
  messagingSenderId: "98347169188",
  appId: "1:98347169188:web:5cb45442a6d9c3d12a7d31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;