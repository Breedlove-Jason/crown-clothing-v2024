import { useState } from 'react';
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';
import FormInput from '@components/FormInput/FormInput.jsx';
import './SignUp.styles.scss';
import Button from '@components/Button/Button.jsx';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserFromEmailAndPassword(
        email,
        password,
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        console.error(error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={'sign-up-container'}>
      <h2>Don't have an account?</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Display Name'}
          required
          type="text"
          onChange={handleChange}
          name={'displayName'}
          value={displayName}
        />
        <FormInput
          label={'Email'}
          required
          type="email"
          onChange={handleChange}
          name={'email'}
          value={email}
        />
        <FormInput
          label={'Password'}
          required
          type="password"
          onChange={handleChange}
          name={'password'}
          value={password}
        />
        <FormInput
          label={'Confirm Password'}
          required
          type="password"
          onChange={handleChange}
          name={'confirmPassword'}
          value={confirmPassword}
        />
        <Button type={'submit'}>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
