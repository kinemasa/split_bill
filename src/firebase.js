
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import  {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKyzovvfZQohc3kRF6S_aSQA9BDoC6IyA",
  authDomain: "split-67cae.firebaseapp.com",
  projectId: "split-67cae",
  storageBucket: "split-67cae.appspot.com",
  messagingSenderId: "979703093226",
  appId: "1:979703093226:web:884aec2ba47e27fd29c493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth,provider,db};
