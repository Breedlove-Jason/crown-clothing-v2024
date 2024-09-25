import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  //background-color: #343a40; /* Dark background color for Cyborg theme */

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const ShoppingIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 13px;
  color: #f8f9fa; /* Light text color for Cyborg theme */

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  top: 5px;
  color: #f8f9fa; /* Light text color for Cyborg theme */

  @media (max-width: 768px) {
    font-size: 12px;
    top: 3px;
  }
`;
