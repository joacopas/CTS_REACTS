// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhYHgdAZf7OM9YaWN4pg6scFJBrM3if2c",
  authDomain: "creatuspot-tienda.firebaseapp.com",
  projectId: "creatuspot-tienda",
  storageBucket: "creatuspot-tienda.appspot.com",
  messagingSenderId: "770898204339",
  appId: "1:770898204339:web:605b174fe97fea1dd782c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
