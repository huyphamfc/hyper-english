import React from 'react';
import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';

import style from './style.module.scss';
import { Button } from '../../components';
import image from '../../assets/images/hero-illustration.svg';
import { toggleBackToTop } from '../../store/BackToTop';

function HeroSection() {
  const dispatch = useDispatch();

  const handleIntersection = () => {
    dispatch(toggleBackToTop());
  };

  return (
    <InView className={style.grid} as="section" onChange={handleIntersection}>
      <div className={style.container}>
        <div className={style.text}>
          <h3 className={style.heading}>English for IT</h3>
          <p className={style.paragraph}>
            The English Vocabulary series that are suitable for students and
            teachers in Information Technology.
          </p>
          <div className={style.actions}>
            <Button solid to="/lessons">
              Get Started
            </Button>
            <Button outline href="#about">
              Learn more &darr;
            </Button>
          </div>
        </div>
        <div className={style.img}>
          <img src={image} alt="The Earth." />
        </div>
      </div>
    </InView>
  );
}

export default HeroSection;
