import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext.jsx';
import CartItem from '@components/CartItem/CartItem.jsx';
// Styled components for CartDropdown
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
  CheckoutButton,
} from './CartDropdown.styles.jsx';

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Navigate to the checkout page
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {/* Render cart items or display a message if empty */}
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {/* Button to navigate to the checkout */}
      <CheckoutButton onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
