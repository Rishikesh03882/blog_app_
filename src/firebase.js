// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCX5pHqDh8HOdyNtudGsBXJpKp4Bkq3n8",
  authDomain: "react-firebase-41771.firebaseapp.com",
  projectId: "react-firebase-41771",
  storageBucket: "react-firebase-41771.firebasestorage.app",
  messagingSenderId: "770217016587",
  appId: "1:770217016587:web:7c29e2da1f181c7cfa360e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db= getFirestore(app);