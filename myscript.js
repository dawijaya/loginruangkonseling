// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCHJvpUjyn19SOvwOzuUwKJXjDXGQS7KF4",
    authDomain: "ruang-konseling-2d313.firebaseapp.com",
    projectId: "ruang-konseling-2d313",
    storageBucket: "ruang-konseling-2d313.appspot.com",
    messagingSenderId: "724598163996",
    appId: "1:724598163996:web:dee3a62e54b6ab58082dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const buttonSignup = document.getElementById("button_signup");
const buttonSignin = document.getElementById("button_signin");

buttonSignup.addEventListener("click", (e) => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("User Telah Ditambahkan");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});