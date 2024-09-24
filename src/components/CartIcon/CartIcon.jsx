import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext.jsx';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './CartIcon.styles.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon>
        <FontAwesomeIcon icon={faShoppingCart} />
        <ItemCount>{cartCount}</ItemCount>
      </ShoppingIcon>
    </CartIconContainer>
  );
}

export default CartIcon;
