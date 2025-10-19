// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUbYq-tFg2qOuJTJJO80alrHj-EcHeemA",
  authDomain: "dragon-news-breaking-df3f7.firebaseapp.com",
  projectId: "dragon-news-breaking-df3f7",
  storageBucket: "dragon-news-breaking-df3f7.firebasestorage.app",
  messagingSenderId: "174275392199",
  appId: "1:174275392199:web:8f9978ca9fba8bd65844e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);