import PropTypes from 'prop-types';
// Styled components for the CartItem
import { CartItemContainer } from './CartItem.styles.jsx';

function CartItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      {/* Display the product image */}
      <img src={imageUrl} alt={name} />
      {/* Display the item details */}
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </CartItemContainer>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
