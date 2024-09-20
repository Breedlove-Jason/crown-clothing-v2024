import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CrownLogo from "../../assets/crown.svg";
import "./Navigation.styles.scss";
import { UserContext } from "../../contexts/UserContext.jsx";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <Fragment>
      <div className={"navigation"}>
        <Link className={"logo-container"} to={"/"}>
          <img src={CrownLogo} className={"logo"} alt={"Crown Clothing Logo"} />
        </Link>
        <div className={"nav-links-container"}>
          <Link className={"nav-link"} to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className={"nav-link"} onClick={signOutHandler} to="/auth">
              SIGN OUT
            </Link>
          ) : (
            <Link className={"nav-link"} to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
