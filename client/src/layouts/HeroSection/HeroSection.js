import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import style from './HeroSection.module.scss';
import { Button } from '../../components';
import image from '../../assets/images/hero-illustration.svg';

function HeroSection({ toggleBackToTop }) {
  const targetRef = useRef();

  useEffect(() => {
    console.log('IntersectionObserver');

    const options = { threshold: 0 };
    const observer = new IntersectionObserver(toggleBackToTop, options);
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, []);

  console.log('Render: HeroSection');

  return (
    <section className={style.grid} ref={targetRef}>
      <div className={style.container}>
        <div className={style.text}>
          <h3 className={style.heading}>English for IT</h3>
          <p className={style.paragraph}>
            The English Vocabulary series that are suitable for students and
            teachers in Information Technology.
          </p>
          <div className={style.actions}>
            <Button solid to="/auth/login">
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
    </section>
  );
}

HeroSection.propTypes = {
  toggleBackToTop: PropTypes.func.isRequired,
};

export default memo(HeroSection);
