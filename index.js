// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJxby2ovvrK6ZgwYL_rCyq715lGBQii5g",
  authDomain: "cvg0420.firebaseapp.com",
  databaseURL: "https://cvg0420-default-rtdb.firebaseio.com",
  projectId: "cvg0420",
  storageBucket: "cvg0420.appspot.com",
  messagingSenderId: "508809352063",
  appId: "1:508809352063:web:7f53f89db91c844850c04a",
  measurementId: "G-5QF96LK6XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);