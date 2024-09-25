import styled from 'styled-components';

const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: #343a40; /* Cyborg background color */
  color: #f8f9fa; /* Cyborg light text color */
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #f8f9fa; /* Light on hover */
    color: #343a40; /* Dark text on hover */
    border: 1px solid #343a40;
  }
`;

const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #343a40;
  border: 1px solid #343a40;

  &:hover {
    background-color: #343a40;
    color: white;
    border: none;
  }
`;

export { BaseButton, GoogleSignInButton, InvertedButton };
