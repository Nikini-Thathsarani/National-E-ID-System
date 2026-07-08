import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_vEwc61ODLJFoYIFZQNr66CnPTzulcBA",
  authDomain: "national-eid-system.firebaseapp.com",
  projectId: "national-eid-system",
  storageBucket: "national-eid-system.firebasestorage.app",
  messagingSenderId: "217330576509",
  appId: "1:217330576509:web:bb227b36aa83263c735514",
  measurementId: "G-5QL9CX4DVH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);