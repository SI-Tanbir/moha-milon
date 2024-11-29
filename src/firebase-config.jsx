import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAM8t4lISfGzRLaP64W3hfINffVHaNkZ0E",
    authDomain: "login-firebase-59296.firebaseapp.com",
    projectId: "login-firebase-59296",
    storageBucket: "login-firebase-59296.firebasestorage.app",
    messagingSenderId: "1045299898968",
    appId: "1:1045299898968:web:3fdd79032cad483992b82d"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;
