import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import style from './Profile.module.scss';
import { Button } from '../../../../components';
import avatar from '../../../../assets/images/avatar.jpg';

function Profile() {
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
          <span className={style.name}>HyperEnglish</span>
          <span className={style.email}>info@hyperenglish.com</span>
        </div>
        <div className={style.item}>
          <Button transparent>Log out</Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
