// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZRfb4UTkNSIrjInQ7ZJL6vNv93GGl9nI",
  authDomain: "raiden-shop-coder.firebaseapp.com",
  projectId: "raiden-shop-coder",
  storageBucket: "raiden-shop-coder.appspot.com",
  messagingSenderId: "289068876915",
  appId: "1:289068876915:web:0349d3ad29b1ae2a41d606",
  measurementId: "G-KYHVEKM060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
