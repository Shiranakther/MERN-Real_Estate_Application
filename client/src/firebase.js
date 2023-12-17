// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f938b.firebaseapp.com",
  projectId: "mern-estate-f938b",
  storageBucket: "mern-estate-f938b.appspot.com",
  messagingSenderId: "420561886464",
  appId: "1:420561886464:web:701f81ef31a0cab77c67e5",
  measurementId: "G-XW2Y1631J7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);