import { useState } from 'react';
// Firebase authentication utilities for sign-in
import {
  signInWithGooglePopUp,
  signInAuthUserFromEmailAndPassword,
} from '../../utils/firebase/firebase.utils.js';
// Form components
import FormInput from '@components/FormInput/FormInput.jsx';
import Button from '@components/Button/Button.jsx';
// Styled components for layout
import { SignInContainer, ButtonsContainer } from './SignIn.styles.jsx';

// Default form fields for the sign-in form
const defaultFormFields = {
  email: '',
  password: '',
};

function SignIn() {
  // State to manage form fields: email and password
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // Resets the form fields to default values
  const resetFormFields = () => setFormFields(defaultFormFields);

  // Handles Google sign-in
  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  // Handles form submission for email and password sign-in
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form reload on submit
    try {
      const { user } = await signInAuthUserFromEmailAndPassword(
        email,
        password,
      );
      resetFormFields(); // Reset form fields after successful sign-in
    } catch (error) {
      // Error handling for different authentication errors
      switch (error.code) {
        case 'auth/invalid-email':
          alert('Invalid email');
          break;
        case 'auth/user-disabled':
          alert('User disabled');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        default:
          alert('An error occurred');
          console.error(error);
      }
    }
  };

  // Handles input changes in the form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <FormInput
          label={'Email'}
          required
          type="email"
          onChange={handleChange}
          name={'email'}
          value={email}
          autoComplete="email"
        />
        {/* Password Input */}
        <FormInput
          label={'Password'}
          required
          type="password"
          onChange={handleChange}
          name={'password'}
          value={password}
          autoComplete="current-password"
        />
        <ButtonsContainer>
          {/* Submit button for email and password sign-in */}
          <Button type={'submit'}>Sign In</Button>
          {/* Google sign-in button */}
          <Button
            type={'button'}
            onClick={signInWithGoogle}
            buttonType={'google'}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}

export default SignIn;
