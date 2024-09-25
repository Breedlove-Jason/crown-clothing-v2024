import PropTypes from 'prop-types';
import { useContext } from 'react';
// Cart context for managing the cart state
import { CartContext } from '../../contexts/CartContext';
// Styled components for the CheckoutItem
import {
  CheckoutItemContainer,
  CheckoutItemImage,
} from './CheckoutItem.styles.jsx';

function CheckoutItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  // Handle removing the item completely from the cart
  const handleClearItem = () => {
    clearItemFromCart(cartItem);
  };

  // Handle adding one more of the item to the cart
  const handleAddItem = () => {
    addItemToCart(cartItem);
  };

  // Handle removing one item from the cart
  const handleRemoveItem = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      {/* Display the image */}
      <div className="image-container">
        <CheckoutItemImage src={imageUrl} alt={name} />
      </div>
      {/* Display the item name */}
      <span className="name">{name}</span>
      {/* Quantity controls */}
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      {/* Display the item price */}
      <span className="price">${price}</span>
      {/* Remove button */}
      <div onClick={handleClearItem} className="remove-button">
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CheckoutItem;
