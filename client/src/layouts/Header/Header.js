import React, { useState } from 'react';

import style from './Header.module.scss';
import { Button } from '../../components';
import NavbarToggle from './NavbarToggle';
import Navbar from './Navbar';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const navbarClass = showNavbar ? 'show' : '';

  const handleNavbarToggle = () => {
    setShowNavbar((state) => !state);
  };

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <h1 className={style.brand}>
          <Button transparent>HyperEnglish</Button>
        </h1>
        <NavbarToggle iconStatus={showNavbar} onClick={handleNavbarToggle} />
        <Navbar className={navbarClass} />
      </nav>
    </header>
  );
}

export default Header;
