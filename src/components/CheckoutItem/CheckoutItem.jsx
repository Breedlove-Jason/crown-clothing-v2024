import './CheckoutItem.styles.scss';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function CheckoutItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const handleClearItem = () => {
    clearItemFromCart(cartItem);
  };
  const handleAddItem = () => {
    addItemToCart(cartItem);
  };
  const handleRemoveItem = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <div className={'checkout-item-container'}>
      <div className={'image-container'}>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className={'name'}>{name}</span>
      <span className={'quantity'}>
        <div className={'arrow'} onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className={'value'}>{quantity}</span>
        <div className={'arrow'} onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className={'price'}>{price}</span>
      <div onClick={handleClearItem} className={'remove-button'}>
        &#10005;
      </div>
    </div>
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
