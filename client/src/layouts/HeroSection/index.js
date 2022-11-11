import React from 'react';

import style from './style.module.scss';
import { Button } from '../../components';
import image from '../../assets/images/hero-illustration.svg';

function HeroSection() {
  return (
    <section className={style.grid}>
      <div className={style.container}>
        <div className={style.text}>
          <h3 className={style.heading}>English for IT</h3>
          <p className={style.paragraph}>
            The English Vocabulary series that are suitable for students and
            teachers in Information Technology.
          </p>
          <div className={style.actions}>
            <Button solid>Get Started</Button>
            <Button outline>Learn more &darr;</Button>
          </div>
        </div>
        <div className={style.img}>
          <img src={image} alt="The Earth." />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
