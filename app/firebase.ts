// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn8ejTuO0pkS5uYMrylqWQNCIxJVqqgDI",
  authDomain: "netflix-6bba7.firebaseapp.com",
  projectId: "netflix-6bba7",
  storageBucket: "netflix-6bba7.appspot.com",
  messagingSenderId: "826739565010",
  appId: "1:826739565010:web:1867ef6bb5dd4c8f28680b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app, auth}