// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-227fe.firebaseapp.com",
  projectId: "mern-auth-227fe",
  storageBucket: "mern-auth-227fe.appspot.com",
  messagingSenderId: "37428103351",
  appId: "1:37428103351:web:1bd9480ba3c13644162532"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);