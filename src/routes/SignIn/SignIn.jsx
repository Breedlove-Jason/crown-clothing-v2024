import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';
import SignUp from '@components/SignUp/SignUp.jsx';

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
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google PopUp</button>
      <SignUp />
    </div>
  );
}

export default SignIn;
