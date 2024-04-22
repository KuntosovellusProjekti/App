import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXFBcULigwrEICL0dAM-DLAepLiaXe81g",
  authDomain: "kuntosovellus.firebaseapp.com",
  databaseURL:
    "https://kuntosovellus-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kuntosovellus",
  storageBucket: "kuntosovellus.appspot.com",
  messagingSenderId: "488407608584",
  appId: "1:488407608584:web:23b1b36362b0eaab29d0bd",
  measurementId: "G-E7QWYX786T",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

