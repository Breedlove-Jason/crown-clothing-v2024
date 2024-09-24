import SignUp from '@components/SignUp/SignUp.jsx';
import SignIn from '@components/SignIn/SignIn.jsx';
import { AuthenticationContainer } from './Authentication.styles.jsx';

function Authentication() {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
}

export default Authentication;
