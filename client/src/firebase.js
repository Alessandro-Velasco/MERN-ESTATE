// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-39245.firebaseapp.com",
  projectId: "mern-estate-39245",
  storageBucket: "mern-estate-39245.appspot.com",
  messagingSenderId: "506714836824",
  appId: "1:506714836824:web:b153dbc2c519ccb2159f2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);