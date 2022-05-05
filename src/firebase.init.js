import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCghGFKxCtMe6nNArpWAteuZ60USM8r8_o",
  authDomain: "grocery-inventory-website.firebaseapp.com",
  projectId: "grocery-inventory-website",
  storageBucket: "grocery-inventory-website.appspot.com",
  messagingSenderId: "543538174636",
  appId: "1:543538174636:web:dbf88131a8ddfa69651d09"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;