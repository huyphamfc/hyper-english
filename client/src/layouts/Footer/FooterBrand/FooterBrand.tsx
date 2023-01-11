import React from 'react';

import styles from './FooterBrand.module.scss';
import { Button } from 'components';
import fbIcon from '../../../assets/icons/footer-facebook.svg';
import instaIcon from '../../../assets/icons/footer-instagram.svg';
import ytIcon from '../../../assets/icons/footer-youtube.svg';

function FooterBrand() {
  return (
    <div className={styles.footer}>
      <h2 className={styles.footer__heading}>HyperEnglish</h2>
      <ul className={styles.footer__items}>
        <li>
          <Button leftImgIcon={fbIcon} href="https://www.facebook.com/" />
        </li>
        <li>
          <Button leftImgIcon={instaIcon} href="https://www.instagram.com/" />
        </li>
        <li>
          <Button leftImgIcon={ytIcon} href="https://www.youtube.com/" />
        </li>
      </ul>
      <span>
        Copyright &copy;
        <Button href="https://www.github.com/">&nbsp;huyphamfc.&nbsp;</Button>
        All rights reserved.
      </span>
    </div>
  );
}

export default FooterBrand;
