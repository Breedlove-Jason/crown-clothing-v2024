import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 60px; /* Increased size */
  height: 60px; /* Increased size */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 45px; /* Adjusted size for mobile */
    height: 45px; /* Adjusted size for mobile */
  }
`;

export const ShoppingIcon = styled.div`
  width: 40px; /* Increased size */
  height: 40px; /* Increased size */
  margin-top: 15px; /* Centered vertically */
  ar @media (max-width: 768px) {
    width: 30px; /* Adjusted size for mobile */
    height: 30px; /* Adjusted size for mobile */
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 14px; /* Increased font size */
  font-weight: bold;
  top: 10px; /* Centered on top */
  color: white; /* Black text */

  @media (max-width: 768px) {
    font-size: 12px; /* Adjusted font size for mobile */
    top: 3px; /* Adjusted position for mobile */
  }
`;
