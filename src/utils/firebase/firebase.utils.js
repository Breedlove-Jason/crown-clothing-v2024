import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUSoqJ2EKBQGVIeLc4aBQ1hR2UVHnWkBI",
  authDomain: "crown-clothing-v2024.firebaseapp.com",
  projectId: "crown-clothing-v2024",
  storageBucket: "crown-clothing-v2024.appspot.com",
  messagingSenderId: "1023500122161",
  appId: "1:1023500122161:web:fbf3cc39d9f8cea367fd10",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef", userDocRef);
};
