import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserFromEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "@components/FormInput/FormInput.jsx";
import "./SignIn.styles.scss";
import Button from "@components/Button/Button.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};
function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
    console.log("User signed in with Google");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserFromEmailAndPassword(
        email,
        password,
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid email");
          break;
        case "auth/user-disabled":
          alert("User disabled");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        default:
          alert("An error occurred");
          console.error(error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={"sign-in-container"}>
      <h2>Already have an account?</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          required
          type="email"
          onChange={handleChange}
          name={"email"}
          value={email}
          autoComplete="email"
        />
        <FormInput
          label={"Password"}
          required
          type="password"
          onChange={handleChange}
          name={"password"}
          value={password}
          autoComplete="current-password"
        />
        <div className={"buttons-container"}>
          <Button type={"submit"}>Sign In</Button>
          <Button
            type={"button"}
            onClick={signInWithGoogle}
            buttonType={"google"}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
