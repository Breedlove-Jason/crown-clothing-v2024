import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '@components/CartIcon/CartIcon.jsx';
import CartDropdown from '@components/CartDropdown/CartDropdown.jsx';

import { CartContext } from '../../contexts/CartContext.jsx';
import { UserContext } from '../../contexts/UserContext.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import CrownLogo from '../../assets/crown.svg';

import './Navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
    console.log('isOpen', isCartOpen);
  };

  return (
    <Fragment>
      <div className={'navigation'}>
        <Link className={'logo-container'} to={'/'}>
          <img src={CrownLogo} className={'logo'} alt={'Crown Clothing Logo'} />
        </Link>
        <div className={'nav-links-container'}>
          <Link className={'nav-link'} to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className={'nav-link'} onClick={signOutUser} to="/auth">
              SIGN OUT
            </Link>
          ) : (
            <Link className={'nav-link'} to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
