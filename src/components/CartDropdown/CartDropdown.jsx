import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext.jsx';
import CartItem from '@components/CartItem/CartItem.jsx';
import Button from '@components/Button/Button.jsx';
// Styled components for CartDropdown
import { CartDropdownContainer } from './CartDropdown.styles.jsx';

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Navigate to the checkout page
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <div className="cart-items">
        {/* Render cart items or display a message if empty */}
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {/* Button to navigate to the checkout */}
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;
