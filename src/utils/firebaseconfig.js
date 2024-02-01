import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXL4Qfr6wHIUpq0hh-UkuKunLz457HUZA",
  authDomain: "fir-auth-bdbfb.firebaseapp.com",
  projectId: "fir-auth-bdbfb",
  storageBucket: "fir-auth-bdbfb.appspot.com",
  messagingSenderId: "645199242529",
  appId: "1:645199242529:web:1a14bb9cd3f974f3c0ca60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);