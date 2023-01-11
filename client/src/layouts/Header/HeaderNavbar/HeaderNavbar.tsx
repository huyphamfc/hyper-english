import React, { memo } from 'react';

import styles from './HeaderNavbar.module.scss';
import { Button } from 'components';
import barIcon from 'assets/icons/header-bar.svg';

function HeaderNavbar() {
  return (
    <>
      <Button toggle>
        <img src={barIcon} alt="Bar icon" />
      </Button>
      <ul className={styles.navbar}>
        <li>
          <Button href="#about">About</Button>
        </li>
        <li>
          <Button href="#products">Products</Button>
        </li>
        <li>
          <Button href="#contact">Contact</Button>
        </li>
        <li>
          <Button solid to="/auth/signup">
            Join
          </Button>
        </li>
      </ul>
    </>
  );
}

export default memo(HeaderNavbar);
