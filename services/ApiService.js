import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

initializeApp(firebaseConfig);

const firestore = getFirestore();

export { firestore };
