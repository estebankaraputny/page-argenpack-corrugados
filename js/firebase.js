// BASE DE DATOS FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDtF0nx78inp7vgwJT2CDgJoag1uK07mM",
    authDomain: "my-project-argenpack.firebaseapp.com",
    projectId: "my-project-argenpack",
    storageBucket: "my-project-argenpack.appspot.com",
    messagingSenderId: "151852346943",
    appId: "1:151852346943:web:bcbae8d05a56ff6289928a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

