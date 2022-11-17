import React, { useState } from 'react';
import classNames from 'classnames';

import style from './style.module.scss';
import { Button } from '../../../../components';
import NavbarToggle from '../NavbarToggle';
import Navbar from '../Navbar';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const navbarClass = showNavbar ? 'show' : '';

  const headerClass = classNames(style.header, {
    [style.showNavbar]: showNavbar,
  });

  const handleNavbarToggle = () => {
    setShowNavbar((state) => !state);
  };

  return (
    <header className={headerClass}>
      <nav className={style.nav}>
        <h1 className={style.brand}>
          <Button transparent to="/">
            HyperEnglish
          </Button>
        </h1>
        <NavbarToggle iconStatus={showNavbar} onClick={handleNavbarToggle} />
        <Navbar
          className={navbarClass}
          navbarStatus={showNavbar}
          onClick={handleNavbarToggle}
        />
      </nav>
    </header>
  );
}

export default Header;
