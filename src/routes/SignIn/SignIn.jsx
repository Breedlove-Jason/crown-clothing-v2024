import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';

function SignIn() {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopUp();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign In with Google PopUp</button>
    </div>
  );
}

export default SignIn;
