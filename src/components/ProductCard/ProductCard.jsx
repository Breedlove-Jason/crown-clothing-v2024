import PropTypes from 'prop-types';
import { useContext } from 'react';
// Cart context for managing cart state
import { CartContext } from '../../contexts/CartContext.jsx';
// Button component
import Button from '@components/Button/Button.jsx';
// Styled components for the ProductCard
import { ProductCardContainer } from './ProductCard.styles.jsx';

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  // Adds the product to the cart
  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      {/* Product image */}
      <img src={imageUrl} alt={name} />
      {/* Product name and price */}
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      {/* Button to add product to cart */}
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
