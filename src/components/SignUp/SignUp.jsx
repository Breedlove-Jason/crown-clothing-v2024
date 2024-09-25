import { useState } from 'react';
// Firebase authentication utilities for sign-up
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';
// Form components
import FormInput from '@components/FormInput/FormInput.jsx';
import Button from '@components/Button/Button.jsx';
// Styled components for layout
import { SignUpContainer } from './SignUp.styles.jsx';

// Default form fields for the sign-up form
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUp() {
  // State to manage form fields: displayName, email, password, confirmPassword
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // Resets the form fields to default values
  const resetFormFields = () => setFormFields(defaultFormFields);

  // Handles form submission for creating a new user
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page reload on form submission
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserFromEmailAndPassword(
        email,
        password,
      );
      // Create user document in the database with the display name
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields(); // Reset form after successful sign-up
    } catch (error) {
      // Handle specific Firebase errors during sign-up
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
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
    <SignUpContainer>
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Display Name Input */}
        <FormInput
          label={'Display Name'}
          required
          type="text"
          onChange={handleChange}
          name={'displayName'}
          value={displayName}
          autoComplete={'displayName'}
        />
        {/* Email Input */}
        <FormInput
          label={'Email'}
          required
          type="email"
          onChange={handleChange}
          name={'email'}
          value={email}
          autoComplete={'email'}
        />
        {/* Password Input */}
        <FormInput
          label={'Password'}
          required
          type="password"
          onChange={handleChange}
          name={'password'}
          value={password}
          autoComplete={'new-password'}
        />
        {/* Confirm Password Input */}
        <FormInput
          label={'Confirm Password'}
          required
          type="password"
          onChange={handleChange}
          name={'confirmPassword'}
          value={confirmPassword}
          autoComplete={'new-password'}
        />
        {/* Submit Button */}
        <Button type={'submit'}>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
