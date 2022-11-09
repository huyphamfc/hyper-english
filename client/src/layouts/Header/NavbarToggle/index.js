import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import style from './NavbarToggle.module.scss';
import { Button } from '../../../components';

function NavbarToggle({ iconStatus, onClick }) {
  const toggleIcon = iconStatus ? faXmark : faBars;

  return (
    <Button
      className={style.toggle}
      transparent
      iconLeft={<FontAwesomeIcon icon={toggleIcon} />}
      onClick={onClick}
    />
  );
}

NavbarToggle.propTypes = {
  iconStatus: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

NavbarToggle.defaultProps = {
  onClick: null,
};

export default NavbarToggle;
