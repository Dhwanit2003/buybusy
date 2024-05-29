// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

import { getStorage } from "firebase/storage";

import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9ZJRcODqMyR5ETLmCCklhlAaSaOnJY-o",
  authDomain: "buy-busy-7352d.firebaseapp.com",
  projectId: "buy-busy-7352d",
  storageBucket: "buy-busy-7352d.appspot.com",
  messagingSenderId: "89676081466",
  appId: "1:89676081466:web:f4882c5c020cf5251f4803",
  measurementId: "G-789PMF2B6G"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

// firebase instance 
const firebaseAuth = getAuth(firebaseapp);

//firestore instance 
const firestoreDb = getFirestore(firebaseapp);

//instance  of the google provider object
const googleProvider = new GoogleAuthProvider();

// intialize cloud storage and get a reference to the service 
const storage = getStorage(firebaseapp);

export {firebaseAuth , firestoreDb , storage , googleProvider};