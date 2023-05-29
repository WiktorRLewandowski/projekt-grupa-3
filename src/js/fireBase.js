
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
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
const auth = getAuth(app);



const openButton = document.querySelector("[data-open-modal]")
const closeButton = document.querySelector("[data-close-modal")
const modalLogin = document.querySelector("[data-modal]")



openButton.addEventListener("click", () => {
    modalLogin.showModal()
})

closeButton.addEventListener("click", () => {
    modalLogin.close()
})

// firebase.auth().onAuthStateChanged(function (user) {
//    const notLoggedIn = document.getElementById('not-logged-in')
//     const loggedIn = document.getElementById('logged-in')
//     if (user) {
// loggedIn.classList.remove('notLoggedIn')
// notLoggedIn.classList.add('loggedIn')
//     } else {

//         notLoggedIn.classList.remove('loggedIn')
//         loggedIn.classList.add('notLoggedIn')
//     }
// });



// function login(event) {
//     event.preventDefault()
// var email = document.getElementById('email').value
// var password = document.getElementById('password').value
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
//         console.log('Error signinng in,', error.message)
//         alert(error.message)
//     })
// }

// function logout() {



// }

loggin__btn.addEventListener('click', (e) => {
    e.preventDefault()
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
      
      const user = userCredential.user;
      console.log('yaaay')
      alert('Loged In!')
    
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      
      alert(errorMessage)
  });

})

const user = auth.currentUser;


onAuthStateChanged(auth, (user) => {
    var notLoggedIn = document.getElementById('not-logged-in');
    var loggedIn = document.getElementById('logged-in');
  if (user) {
    // User is signed in, see docs for a list of available properties
   
      loggedIn.style.display = 'block'
notLoggedIn.style.display = 'none'
    const uid = user.uid;
  
  } else {
    // User is signed out
  
      loggedIn.style.display = 'none'
notLoggedIn.style.display = 'block'
  }
});


logout__btn.addEventListener('click', (e) => {

signOut(auth).then(() => {
  // Sign-out successful.
    alert('Signed out')
}).catch((error) => {
  // An error happened.
     const errorCode = error.code;
      const errorMessage = error.message;
      
    alert(errorMessage);
});

})

