import styled from 'styled-components';
import { BaseButton } from '@components/Button/Button.styles.jsx'; // Use existing styled Button component

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #6c757d; /* Cyborg border color */
  background-color: #343a40; /* Cyborg background color */
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  color: #f8f9fa; /* Light text for Cyborg theme */
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  color: #f8f9fa; /* Light text for Cyborg theme */
`;

export const CheckoutButton = styled(BaseButton)`
  margin-top: auto;
  background-color: #3aa6d9; /* Match the theme's button color */
  color: #f8f9fa;
  border: none;
`;
