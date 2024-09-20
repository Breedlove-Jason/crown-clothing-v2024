import { useState, useContext } from "react";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "@components/FormInput/FormInput.jsx";
import "./SignUp.styles.scss";
import Button from "@components/Button/Button.jsx";
import { UserContext } from "../../contexts/UserContext.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);
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
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
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
    <div className={"sign-up-container"}>
      <h2>Don&nbsp;t have an account?</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          required
          type="text"
          onChange={handleChange}
          name={"displayName"}
          value={displayName}
          autoComplete={"displayName"}
        />
        <FormInput
          label={"Email"}
          required
          type="email"
          onChange={handleChange}
          name={"email"}
          value={email}
          autoComplete={"email"}
        />
        <FormInput
          label={"Password"}
          required
          type="password"
          onChange={handleChange}
          name={"password"}
          value={password}
          autoComplete={"new-password"}
        />
        <FormInput
          label={"Confirm Password"}
          required
          type="password"
          onChange={handleChange}
          name={"confirmPassword"}
          value={confirmPassword}
          autoComplete={"new-password"}
        />
        <Button type={"submit"}>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
