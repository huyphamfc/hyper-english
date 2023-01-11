import React, { memo } from 'react';

import styles from './Application.module.scss';

import { Button } from 'components';
import appIcon from '../../assets/icons/application-appstore.svg';
import ggIcon from '../../assets/icons/application-ggplay.svg';
import image from '../../assets/images/application.svg';

function Application() {
  return (
    <section className={styles.application}>
      <div className={styles.application__text}>
        <h2 className={styles.heading}>Learn anytime, anywhere</h2>
        <p className={styles.paragraph}>
          Make your breaks and commutes more productive with our iPhone and Android apps. Download
          them and see why Apple and Google gave us their highest accolades.
        </p>
        <div className={styles.application__actions}>
          <Button outline leftImgIcon={appIcon} href="https://www.apple.com/app-store/">
            App Store
          </Button>
          <Button outline leftImgIcon={ggIcon} href="https://play.google.com/">
            Google Play
          </Button>
        </div>
      </div>
      <div className={styles.application__img}>
        <img src={image} alt="Icon" />
      </div>
    </section>
  );
}

export default memo(Application);
