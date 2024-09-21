import './CartDropdown.styles.scss';
import Button from '@components/Button/Button.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext.jsx';
import CartItem from '@components/CartItem/CartItem.jsx';

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={'cart-dropdown-container'}>
      <div className={'cart-items'}>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
