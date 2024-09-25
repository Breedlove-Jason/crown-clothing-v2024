import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext.jsx';
import CheckoutItem from '@components/CheckoutItem/CheckoutItem.jsx';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './Checkout.styles.jsx';

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {/* Column headers */}
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {/* Render cart items */}
      {cartItems.map((item) => (
        <CheckoutItem cartItem={item} key={item.id} />
      ))}
      {/* Display total */}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
}

export default Checkout;
