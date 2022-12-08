
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAqwl8x3qHRmmCBu7pXVtvAbWqk0hesDyU",
  authDomain: "whats-app-web-clone-fc230.firebaseapp.com",
  projectId: "whats-app-web-clone-fc230",
  storageBucket: "whats-app-web-clone-fc230.appspot.com",
  messagingSenderId: "122701087755",
  appId: "1:122701087755:web:7f835b6b4d5aa43eb4f30e",
  measurementId: "G-89Z0LZQX5L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
