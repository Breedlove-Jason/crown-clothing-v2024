import SignUp from "@components/SignUp/SignUp.jsx";
import SignIn from "@components/SignIn/SignIn.jsx";
import "./Authentication.styles.scss";

function Authentication() {
  // const logGoogleUser = async () => {
  //   try {
  //     const { user } = await signInWithGooglePopUp();
  //     const userDocRef = await createUserDocumentFromAuth(user);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className={"authentication-container"}>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Authentication;
