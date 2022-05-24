// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1QE25psbDhbb9kq4009Yo6BZbDG8hEmg",
  authDomain: "shift-up-42873.firebaseapp.com",
  projectId: "shift-up-42873",
  storageBucket: "shift-up-42873.appspot.com",
  messagingSenderId: "583429216068",
  appId: "1:583429216068:web:3421b1b5f132c5f376e911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;