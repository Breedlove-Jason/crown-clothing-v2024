import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleAuthProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {},
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("userSnapshot", userSnapshot);
  console.log("userSnapshot", userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
