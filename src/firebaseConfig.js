import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBNyCvGbz86tOWZrRfxl2xSCWzpG8u3BZI",
  authDomain: "typing-speed-fce70.firebaseapp.com",
  projectId: "typing-speed-fce70",
  storageBucket: "typing-speed-fce70.appspot.com",
  messagingSenderId: "759111145110",
  appId: "1:759111145110:web:b1e489c5e170c461e1d4b7",
  measurementId: "G-MGVLHT6FT4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };