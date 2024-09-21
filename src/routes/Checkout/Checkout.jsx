import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.jsx";
import "./Checkout.styles.scss";

function Checkout() {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {cartItems.map((item) => {
          const { id, name, quantity } = item;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(item)}>-</span>
              <br />
              <span
                onClick={() => {
                  addItemToCart(item);
                }}
              >
                +
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Checkout;
