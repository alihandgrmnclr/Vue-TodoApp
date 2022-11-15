import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyDl1CTQmyrKggt04W8_Nx8UzDv-iv_1gUA",
  authDomain: "vue-todo-a5d04.firebaseapp.com",
  projectId: "vue-todo-a5d04",
  storageBucket: "vue-todo-a5d04.appspot.com",
  messagingSenderId: "621793792436",
  appId: "1:621793792436:web:f65a4446e6a537c8ac62e1",
};

const fb = initializeApp(firebaseConfig);
const auth = getAuth(fb);
const db = getFirestore(fb);

export { db, firebaseConfig, auth };
