import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  background-color: #343a40; /* Dark background for Cyborg theme */
  color: #f8f9fa; /* Light text color for Cyborg theme */
  padding-left: 12px; /* Added padding-left for alignment */
  border-radius: 10px; /* Added border-radius for rounded corners */

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #6c757d; /* Cyborg border color */
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  color: #f8f9fa; /* Light text color for Cyborg theme */

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin: 30px 30px 30px auto;
  font-size: 36px;
  color: #f8f9fa; /* Light text for Cyborg theme */
`;
