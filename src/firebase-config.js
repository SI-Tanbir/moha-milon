// Import the functions you need from the SDKs you need
import { getAuth,initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM8t4lISfGzRLaP64W3hfINffVHaNkZ0E",
  authDomain: "login-firebase-59296.firebaseapp.com",
  projectId: "login-firebase-59296",
  storageBucket: "login-firebase-59296.firebasestorage.app",
  messagingSenderId: "1045299898968",
  appId: "1:1045299898968:web:3fdd79032cad483992b82d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;