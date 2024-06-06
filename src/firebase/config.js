// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDySYiIRk7ZsneN8_TfYEI-ayvUK1VHK2A",
  authDomain: "react-cursos-48e2f.firebaseapp.com",
  projectId: "react-cursos-48e2f",
  storageBucket: "react-cursos-48e2f.appspot.com",
  messagingSenderId: "794713133396",
  appId: "1:794713133396:web:2447654cf9af5914aaf8c1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );


