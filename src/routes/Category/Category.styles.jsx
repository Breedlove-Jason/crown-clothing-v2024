import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  background-color: #343a40; /* Dark background for Cyborg theme */
  color: #f8f9fa; /* Light text color for Cyborg theme */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 25px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  cursor: pointer;
  text-align: center;
  color: #f8f9fa; /* Light text for Cyborg theme */

  &:hover {
    color: #3aa6d9; /* Optional hover effect for title */
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;
