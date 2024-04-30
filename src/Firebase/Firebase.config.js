// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: import.meta.env.VITE_APIKEY ,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN ,
  // projectId: import.meta.env.VITE_PROJECTID ,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID

  apiKey: "AIzaSyAFAr3zlP5YAKFmGRs0tG4xJGtDwhXBb4g",
  authDomain: "assignment-10-f408e.firebaseapp.com",
  projectId: "assignment-10-f408e",
  storageBucket: "assignment-10-f408e.appspot.com",
  messagingSenderId: "430356535995",
  appId: "1:430356535995:web:eacba243d2bc74de7ca79e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth