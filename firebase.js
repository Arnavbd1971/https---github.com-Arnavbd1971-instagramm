// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVFcoqEdfdnqkvgTefqMmrN7dnXcqTPVA",
  authDomain: "instahramm-e190d.firebaseapp.com",
  projectId: "instahramm-e190d",
  storageBucket: "instahramm-e190d.appspot.com",
  messagingSenderId: "355264987399",
  appId: "1:355264987399:web:b89f13f5a418b3514b85a2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Database
const db = getFirestore();
// storage
const storage = getStorage();

export { app, db, storage };
