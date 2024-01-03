// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVxQpkWbdvK2hYAUjq2yapHFCT1JwdiTM",
    authDomain: "authentication7238.firebaseapp.com",
    projectId: "authentication7238",
    storageBucket: "authentication7238.appspot.com",
    messagingSenderId: "800809468596",
    appId: "1:800809468596:web:a1979531a4c2218edd4de1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };