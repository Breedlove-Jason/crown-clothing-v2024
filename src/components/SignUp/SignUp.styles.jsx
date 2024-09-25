import styled from 'styled-components';

// Container for the sign-up form
export const SignUpContainer = styled.div`
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
