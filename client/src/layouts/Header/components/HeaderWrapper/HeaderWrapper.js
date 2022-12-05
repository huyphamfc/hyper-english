import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import style from './HeaderWrapper.module.scss';
import { Button } from '../../../../components';
import NavbarToggle from '../NavbarToggle';
import Navbar from '../Navbar';
import Profile from '../Profile';

function HeaderWrapper() {
  const { isAuth } = useSelector((state) => state.auth);
  const [showNavbar, setShowNavbar] = useState(false);

  const headerClass = classNames(style.header, {
    [style.showNavbar]: showNavbar,
  });

  const navbarClass = showNavbar ? 'show' : '';

  const handleNavbarToggle = () => {
    setShowNavbar((state) => !state);
  };

  const homeRoute = isAuth ? '/lessons' : '/';

  console.log('Render: HeaderWrapper');

  return (
    <header className={headerClass}>
      <nav className={style.nav}>
        <h1 className={style.brand}>
          <Button transparent to={homeRoute}>
            HyperEnglish
          </Button>
        </h1>
        {isAuth || (
          <>
            <NavbarToggle
              isShowIcon={showNavbar}
              toggleNavbar={handleNavbarToggle}
            />
            <Navbar
              className={navbarClass}
              isOpenNavbar={showNavbar}
              toggleNavbar={handleNavbarToggle}
            />
          </>
        )}
        {isAuth && <Profile />}
      </nav>
    </header>
  );
}

export default memo(HeaderWrapper);
