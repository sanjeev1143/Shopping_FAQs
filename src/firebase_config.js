// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtuxTJc280SpHoLYo215lLIG6PS8N3O2M",
    authDomain: "shopping-enquire.firebaseapp.com",
    projectId: "shopping-enquire",
    storageBucket: "shopping-enquire.appspot.com",
    messagingSenderId: "143333357872",
    appId: "1:143333357872:web:7c744a7b5d04e914f570f5",
    measurementId: "G-XL2H8KRQ79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Database = getFirestore(app);