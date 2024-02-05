// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-74783.firebaseapp.com",
  projectId: "mern-blog-74783",
  storageBucket: "mern-blog-74783.appspot.com",
  messagingSenderId: "543383708090",
  appId: "1:543383708090:web:6b4de591eb40afd070fd83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);