import React, { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import { Button, Navbar } from '../../components';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const iconBtn = showNavbar ? faXmark : faBars;

  const headerClass = classNames(style.header, {
    [style.show]: showNavbar,
  });

  const navbarClass = showNavbar ? 'show' : null;

  const toggleNavbar = () => {
    setShowNavbar((state) => !state);
  };

  return (
    <header className={headerClass}>
      <nav className={style.nav}>
        <h1 className={style.brand}>
          <Button transparent>HyperEnglish</Button>
        </h1>
        <Button
          className={style.toggle}
          transparent
          iconLeft={<FontAwesomeIcon icon={iconBtn} />}
          onClick={toggleNavbar}
        />
        <Navbar className={navbarClass} />
      </nav>
    </header>
  );
}

export default Header;
