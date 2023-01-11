import React, { memo, useEffect, useRef, Dispatch, SetStateAction } from 'react';

import styles from './HeroSection.module.scss';
import { Button } from 'components';
import heroImg from 'assets/images/hero-section.svg';

type HeroSectionProps = {
  onHandleIntersection: Dispatch<SetStateAction<boolean>>;
};

function HeroSection({ onHandleIntersection }: HeroSectionProps) {
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targetElement = targetRef?.current;
    if (!targetElement) return;

    const callback = ([entry]: IntersectionObserverEntry[]): void => {
      if (entry.isIntersecting) {
        onHandleIntersection(true);
      } else {
        onHandleIntersection(false);
      }
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75,
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(targetElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} ref={targetRef}>
      <div className={styles.hero__content}>
        <div className={styles.hero__text}>
          <h2 className={styles.hero__heading}>English for IT</h2>
          <p className={styles.hero__paragraph}>
            The English Vocabulary series that are suitable for students and teachers in Information
            Technology.
          </p>
          <div className={styles.hero__actions}>
            <Button solid to="/auth/signup">
              Get Started
            </Button>
            <Button href="#about" outline>
              Learn more &darr;
            </Button>
          </div>
        </div>
        <div className={styles.hero__img}>
          <img src={heroImg} alt="The Earth" />
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
