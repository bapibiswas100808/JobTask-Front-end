// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2VR8dbXYE2tb1Ua3c0pegOuA4zHlIgoI",
  authDomain: "mfs-project-a4f60.firebaseapp.com",
  projectId: "mfs-project-a4f60",
  storageBucket: "mfs-project-a4f60.appspot.com",
  messagingSenderId: "845610392868",
  appId: "1:845610392868:web:5ed75ea5d9bb71ad6067b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
