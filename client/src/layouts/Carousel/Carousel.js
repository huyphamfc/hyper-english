import React from 'react';

import style from './Carousel.module.scss';
import { Button } from '../../components';

function Carousel() {
  return (
    <section className={style.carousel}>
      <div className={style.carousel__container}>
        <div className={style.carousel__text}>
          <h2 className={style.carousel__heading}>English for IT</h2>
          <p className={style.carousel__paragraph}>
            The English Vocabulary series that are suitable for students and
            teachers in Information Technology.
          </p>
          <div className={style.carousel__actions}>
            <Button solid>Get Started</Button>
            <Button outline>Learn more &darr;</Button>
          </div>
        </div>
        <div className={style.carousel__img} />
      </div>
    </section>
  );
}

export default Carousel;
