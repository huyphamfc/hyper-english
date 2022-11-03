import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Navbar.module.scss';
import Button from '../Button';

function Navbar({ className }) {
  const navbarClass = classNames(style.navbar, {
    [style[className]]: className,
  });

  return (
    <ul className={navbarClass}>
      <li>
        <Button transparent>Home</Button>
      </li>
      <li>
        <Button transparent>About</Button>
      </li>
      <li>
        <Button transparent>Products</Button>
      </li>
      <li>
        <Button transparent>Contact</Button>
      </li>
      <li>
        <Button solid>Join</Button>
      </li>
    </ul>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};

Navbar.defaultProps = {
  className: null,
};

export default Navbar;
