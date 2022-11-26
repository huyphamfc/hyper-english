import React from 'react';

import style from './FooterBrand.module.scss';
import { Button } from '../../../../components';
import fbIcon from '../../../../assets/fontawesome-icon/faFacebook.svg';
import instaIcon from '../../../../assets/fontawesome-icon/faInstagram.svg';
import ytIcon from '../../../../assets/fontawesome-icon/faYouTube.svg';

function FooterBrand() {
  return (
    <div className={style.brand}>
      <h3 className={style.heading}>HyperEnglish</h3>
      <ul className={style.items}>
        <li>
          <Button
            transparent
            iconImgLeft={<img src={fbIcon} alt="Facebook icon" />}
            href="https://www.facebook.com/"
          />
        </li>
        <li>
          <Button
            transparent
            iconImgLeft={<img src={instaIcon} alt="Instagram icon" />}
            href="https://www.instagram.com/"
          />
        </li>
        <li>
          <Button
            transparent
            iconImgLeft={<img src={ytIcon} alt="YouTube icon" />}
            href="https://www.youtube.com/"
          />
        </li>
      </ul>
      <span>
        Copyright &copy;
        <Button transparent href="https://www.github.com/">
          &nbsp;huyphamfc.&nbsp;
        </Button>
        All rights reserved.
      </span>
    </div>
  );
}

export default FooterBrand;
