// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_p6VVPzXZ-EEA3xTVftZloX6x0UBc_Qg",
  authDomain: "clone-699d4.firebaseapp.com",
  projectId: "clone-699d4",
  storageBucket: "clone-699d4.firebasestorage.app",
  messagingSenderId: "918033146747",
  appId: "1:918033146747:web:28baae790ed3493f0e53de",
  measurementId: "G-T4CR1QQC5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();