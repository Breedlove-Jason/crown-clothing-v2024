import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import CrownLogo from '../../assets/crown.svg';
import './Navigation.styles.scss';

const Navigation = () => {
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
          <Link className={'nav-link'} to="/auth">
            SIGN IN
          </Link>
          {/*<Link className={"nav-link"} to=""></Link>*/}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
