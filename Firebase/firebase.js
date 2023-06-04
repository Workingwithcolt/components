import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getStorage} from "firebase/storage"
// import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDfSPr8LMmMZUr-6LPOm21dfD9TxeaCfsw",
  authDomain: "blockchain-acd70.firebaseapp.com",
  projectId: "blockchain-acd70",
  storageBucket: "blockchain-acd70.appspot.com",
  messagingSenderId: "120068421904",
  appId: "1:120068421904:web:851fcd0d5a027a5ac64d95",
  measurementId: "G-Q35W1G10Q7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export {db,auth}
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app)