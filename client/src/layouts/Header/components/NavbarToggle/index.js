import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import style from './style.module.scss';
import { Button } from '../../../../components';

function NavbarToggle({ isShowIcon, toggleNavbar }) {
  const toggleIcon = isShowIcon ? faXmark : faBars;

  return (
    <Button
      className={style.toggle}
      transparent
      iconLeft={<FontAwesomeIcon icon={toggleIcon} />}
      onClick={toggleNavbar}
    />
  );
}

NavbarToggle.propTypes = {
  isShowIcon: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default NavbarToggle;
