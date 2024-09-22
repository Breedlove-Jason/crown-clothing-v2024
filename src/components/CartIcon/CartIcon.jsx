import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.jsx";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className={"cart-icon-container"} onClick={toggleIsCartOpen}>
      <img src={ShoppingIcon} className={"shopping-icon"} alt="Shopping Bag" />
      <span className={"item-count"}>{cartCount}</span>
    </div>
  );
}

export default CartIcon;
