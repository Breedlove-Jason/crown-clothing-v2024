import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '@components/CartIcon/CartIcon.jsx';
import CartDropdown from '@components/CartDropdown/CartDropdown.jsx';

import { CartContext } from '../../contexts/CartContext.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import CrownLogo from '../../assets/crown.svg';

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './Navigation.styles.jsx';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <img src={CrownLogo} alt={'Crown Clothing Logo'} />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
