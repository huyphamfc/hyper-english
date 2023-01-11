import React from 'react';

import styles from './HeaderWrapper.module.scss';
import HeaderBrand from '../HeaderBrand';
import HeaderNavbar from '../HeaderNavbar';
import HeaderProfile from '../HeaderProfile';
import { useAppSelector } from 'hooks';

type HeaderWrapperProps = {
  isVisible?: boolean;
};

function HeaderWrapper({ isVisible }: HeaderWrapperProps) {
  const { isLogin } = useAppSelector((state) => state.auth);

  const headerStyle = {
    backgroundColor: isVisible ? 'transparent' : '#fff',
    color: isVisible ? '#fff' : undefined,
    boxShadow: isVisible ? undefined : '0 2px 6px #ddd',
  };

  return (
    <header style={{ ...headerStyle }} className={styles.header}>
      <nav className={styles.header__nav}>
        <HeaderBrand />
        {isLogin || <HeaderNavbar />}
        {isLogin && <HeaderProfile />}
      </nav>
    </header>
  );
}

export default HeaderWrapper;
