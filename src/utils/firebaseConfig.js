// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzme9rD1XLlsdqkiH_JBs0c8-YT5ajp9I",
  authDomain: "tienda-riverplate-react.firebaseapp.com",
  projectId: "tienda-riverplate-react",
  storageBucket: "tienda-riverplate-react.appspot.com",
  messagingSenderId: "217040627555",
  appId: "1:217040627555:web:e23a6bf43c5b23c8681556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;