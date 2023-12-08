import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCixiwOOfiu_CFNU88krUNeSoK08xK3F3o",
  authDomain: "task-auto-97226.firebaseapp.com",
  projectId: "task-auto-97226",
  storageBucket: "task-auto-97226.appspot.com",
  messagingSenderId: "645786430385",
  appId: "1:645786430385:web:1b3aafe24238a45c02ab90",
  measurementId: "G-JKQJ2ZYLYC",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
