// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyAEqXAacq4ennVNyMyZaCLMSPQ587g-rkE",
    // authDomain: "blog-project-yt-3b6d4.firebaseapp.com",
    // projectId: "blog-project-yt-3b6d4",
    // storageBucket: "blog-project-yt-3b6d4.appspot.com",
    // messagingSenderId: "335282453873",
    // appId: "1:335282453873:web:66d894345733a678e68ad0"
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Instance for Firebase Auth
export const auth = getAuth(app)

// Instance for Google Sign On
export const provider = new GoogleAuthProvider()

// Instance for Firestore db
export const db = getFirestore(app)