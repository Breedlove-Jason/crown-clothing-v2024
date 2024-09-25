import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    //img {
    //  width: 100%;
    //  height: 100%;
    //}
  }

  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 18px;

    .name,
    .quantity,
    .price {
      width: 20%;
    }
  }
`;

export const CheckoutItemImage = styled.img`
     width: 150px !important; /* Ensure all images are the same width */
     height: 200px; !important/* Ensure all images are the same height */
     object-fit: cover; /* Keep aspect ratio and crop overflow */
     border-radius: 15px; /* Add border-radius to match the container */
`;
