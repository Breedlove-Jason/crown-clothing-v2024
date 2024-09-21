import './CartDropdown.styles.scss';
import Button from '@components/Button/Button.jsx';

function CartDropdown() {
  return (
    <div className={'cart-dropdown-container'}>
      <div className={'cart-items'} />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
