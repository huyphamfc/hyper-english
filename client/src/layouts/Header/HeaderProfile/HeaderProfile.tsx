import React from 'react';

import styles from './HeaderProfile.module.scss';
import { Button } from 'components';
import { logout } from 'store';
import { useAppSelector, useAppDispatch } from 'hooks';
import icon from '../../../assets/icons/header-profile.svg';
import avatar from '../../../assets/images/header-avatar.png';

function Profile() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/user/logout`, {
      credentials: 'include',
    });
    dispatch(logout());
  };

  return (
    <div className={styles.profile}>
      <Button outline leftImgIcon={icon} />
      <div className={styles.profile__info}>
        <div className={styles.profile__item}>
          <div className={styles.profile__img}>
            <img src={avatar} alt="Avatar" />
          </div>
          <span className={styles.profile__username}>{user.username}</span>
          <span className={styles.profile__email}>{user.email}</span>
        </div>
        <div className={styles.profile__item}>
          <Button onClick={handleLogout}>Log out</Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
