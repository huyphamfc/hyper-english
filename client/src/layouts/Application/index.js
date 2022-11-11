import React from 'react';

import style from './style.module.scss';
import { Button } from '../../components';
import appIcon from '../../assets/icons/application-appstore.svg';
import ggIcon from '../../assets/icons/application-ggplay.svg';
import image from '../../assets/images/application.svg';

function Application() {
  return (
    <section className={style.grid}>
      <div className={style.container}>
        <div className={style.text}>
          <h3 className={style.heading}>Learn anytime, anywhere</h3>
          <p className={style.paragraph}>
            Make your breaks and commutes more productive with our iPhone and
            Android apps. Download them and see why Apple and Google gave us
            their highest accolades.
          </p>
          <div className={style.actions}>
            <Button solid iconImgLeft={<img src={appIcon} alt="Icon" />}>
              App Store
            </Button>
            <Button solid iconImgLeft={<img src={ggIcon} alt="Icon" />}>
              Google Play
            </Button>
          </div>
        </div>
        <div className={style.img}>
          <img src={image} alt="Icon" />
        </div>
      </div>
    </section>
  );
}

export default Application;
