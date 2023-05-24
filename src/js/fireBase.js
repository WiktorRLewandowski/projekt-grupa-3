
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf2KBwK737nUX82vntvS2B7WF6oOFARrU",
  authDomain: "filmoteka-js-fecb7.firebaseapp.com",
  projectId: "filmoteka-js-fecb7",
  storageBucket: "filmoteka-js-fecb7.appspot.com",
  messagingSenderId: "171865255669",
  appId: "1:171865255669:web:c8575883107245d7709fbc",
  measurementId: "G-V8ZSD2227D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


