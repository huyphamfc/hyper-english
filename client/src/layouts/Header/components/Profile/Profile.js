import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import style from './Profile.module.scss';
import { Button } from '../../../../components';
import { logout } from '../../../../store/authSlice';
import avatar from '../../../../assets/images/avatar.jpg';

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/user/logout`, {
      credentials: 'include',
    });
    dispatch(logout());
  };

  console.log('Render: Profile');

  return (
    <div className={style.profile}>
      <Button
        className={style.button}
        outline
        iconLeft={<FontAwesomeIcon icon={faUser} />}
      />
      <div className={style.info}>
        <div className={style.item}>
          <div className={style.img}>
            <img src={avatar} alt="Avatar" />
          </div>
          <span className={style.name}>{user.name}</span>
          <span className={style.email}>{user.email}</span>
        </div>
        <div className={style.item}>
          <Button transparent onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
