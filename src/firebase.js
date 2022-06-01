// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKf9D92S38_brj3ZLLPyZSf_lwj1PHBv4",
  authDomain: "linkedin-clone-54f78.firebaseapp.com",
  projectId: "linkedin-clone-54f78",
  storageBucket: "linkedin-clone-54f78.appspot.com",
  messagingSenderId: "970355716393",
  appId: "1:970355716393:web:c98d4dbbd728d4bf0d4738",
  measurementId: "G-KM4YMPDF62",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
