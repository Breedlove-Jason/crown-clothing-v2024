import "./CartItem.styles.scss";
import PropTypes from "prop-types";

function CartItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className={"cart-item-container"}>
      <img src={imageUrl} alt={`${name}`} />
      <div className={"item-details"}>
        <span className={"name"}>{name}</span>
        <span className={"price"}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
