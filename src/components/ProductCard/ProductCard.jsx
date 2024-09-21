import './ProductCard.styles.scss';
import Button from '@components/Button/Button.jsx';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext.jsx';

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className={'product-card-container'}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={'inverted'} onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
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
