// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZFMuqU4zfmSIUxu9nGXoE3MYQS01czGI",
  authDomain: "technology-and-electroni-30419.firebaseapp.com",
  projectId: "technology-and-electroni-30419",
  storageBucket: "technology-and-electroni-30419.appspot.com",
  messagingSenderId: "438104059841",
  appId: "1:438104059841:web:4e89df707d4382b9e50940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;