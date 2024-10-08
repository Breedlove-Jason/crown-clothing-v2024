import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    text-decoration: none;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
