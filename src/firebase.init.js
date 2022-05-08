// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7X4dJqPdzJ5WPgmtHYIUSL2c99dgal94",
  authDomain: "assignment11-7cc83.firebaseapp.com",
  projectId: "assignment11-7cc83",
  storageBucket: "assignment11-7cc83.appspot.com",
  messagingSenderId: "822809496611",
  appId: "1:822809496611:web:433eddfdc4af5471dcf596",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
