// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChybHFq2WFExIFYVGW450_d3vVyVIteCQ",
  authDomain: "sketchcompendium-b3af3.firebaseapp.com",
  projectId: "sketchcompendium-b3af3",
  storageBucket: "sketchcompendium-b3af3.appspot.com",
  messagingSenderId: "327115953636",
  appId: "1:327115953636:web:04780a64d9909b541f23f1",
  measurementId: "G-CXQYHVJ88S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };
