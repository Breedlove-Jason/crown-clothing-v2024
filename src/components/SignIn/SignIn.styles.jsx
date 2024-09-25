import styled from 'styled-components';

// Container for the sign-in form
export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  // Mobile responsiveness
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

// Container for buttons with responsive adjustments
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
