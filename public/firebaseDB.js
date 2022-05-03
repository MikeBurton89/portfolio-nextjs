import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyDwQiiKyKahAnK6SCHPuqYj7s3aqQIytdg",
    authDomain: "portfolio-data-8b8fc.firebaseapp.com",
    databaseURL: "https://portfolio-data-8b8fc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolio-data-8b8fc",
    storageBucket: "portfolio-data-8b8fc.appspot.com",
    messagingSenderId: "980222997077",
    appId: "1:980222997077:web:69c83192599326de8b5adc",
    measurementId: "G-JKVBYB4NZN"
};


export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
