// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMPDxMfT8MStxhyXMLRRImxcT60oMEzNA",
    authDomain: "genius-car-services-301c6.firebaseapp.com",
    projectId: "genius-car-services-301c6",
    storageBucket: "genius-car-services-301c6.appspot.com",
    messagingSenderId: "952146521980",
    appId: "1:952146521980:web:75da51e10bb7f09c047ef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;