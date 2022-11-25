import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';
import { Button } from '../../../../components';

function Navbar({ className, isOpenNavbar, toggleNavbar }) {
  const navbarClass = classNames(style.navbar, {
    [style[className]]: className,
  });

  const handleScrollTo = () => {
    if (isOpenNavbar) toggleNavbar();
  };

  return (
    <ul className={navbarClass}>
      <li>
        <Button transparent href="#" onClick={handleScrollTo}>
          Home
        </Button>
      </li>
      <li>
        <Button transparent href="#about" onClick={handleScrollTo}>
          About
        </Button>
      </li>
      <li>
        <Button transparent href="#products" onClick={handleScrollTo}>
          Products
        </Button>
      </li>
      <li>
        <Button transparent href="#contact" onClick={handleScrollTo}>
          Contact
        </Button>
      </li>
      <li>
        <Button solid to="/authentication/signup" onClick={handleScrollTo}>
          Join
        </Button>
      </li>
    </ul>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
  isOpenNavbar: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default Navbar;
