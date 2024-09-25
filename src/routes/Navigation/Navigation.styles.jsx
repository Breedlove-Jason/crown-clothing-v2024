import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center content vertically */
  margin-bottom: 25px;
  background-color: #343a40; /* Dark background for Cyborg theme */
  color: #f8f9fa; /* Light text color for Cyborg theme */
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex; /* Flexbox to center the logo vertically */
  align-items: center;
  padding: 0 25px; /* Adjusted padding for alignment */

  img {
    filter: invert(100%); /* Ensure the logo is visible on dark background */
  }
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #f8f9fa; /* Light text color for Cyborg theme */
  text-decoration: none;

  &:hover {
    color: #3aa6d9; /* Blue accent for hover */
  }
`;
