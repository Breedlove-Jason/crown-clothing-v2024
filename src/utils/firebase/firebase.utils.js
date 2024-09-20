import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDUSoqJ2EKBQGVIeLc4aBQ1hR2UVHnWkBI',
  authDomain: 'crown-clothing-v2024.firebaseapp.com',
  projectId: 'crown-clothing-v2024',
  storageBucket: 'crown-clothing-v2024.appspot.com',
  messagingSenderId: '1023500122161',
  appId: '1:1023500122161:web:fbf3cc39d9f8cea367fd10',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();

export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleAuthProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log('userDocRef', userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log('userSnapshot', userSnapshot);
  console.log('userSnapshot', userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }
  return userDocRef;
};
