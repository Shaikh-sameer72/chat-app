
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDhj5J0G3PXVXV9vVS1YT0d1XGF_cVw80",
  authDomain: "sameerchat-c03e9.firebaseapp.com",
  projectId: "sameerchat-c03e9",
  storageBucket: "sameerchat-c03e9.appspot.com",
  messagingSenderId: "274335674941",
  appId: "1:274335674941:web:45831fe2789e5a48347054"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)