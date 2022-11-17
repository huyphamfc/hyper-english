import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';
import { Button } from '../../../../components';

function Navbar({ className, navbarStatus, onClick }) {
  const navbarClass = classNames(style.navbar, {
    [style[className]]: className,
  });

  const handleScrollTo = () => {
    if (navbarStatus) onClick();
  };

  return (
    <ul className={navbarClass}>
      <li>
        <Button transparent href="#">
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
        <Button solid round>
          Join
        </Button>
      </li>
    </ul>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
  navbarStatus: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Navbar;
