import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

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

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;
