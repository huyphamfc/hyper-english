import React from 'react';

import style from './About.module.scss';
import aboutImg1 from '../../assets/images/about-01.svg';
import aboutImg2 from '../../assets/images/about-02.svg';
// import aboutImg3 from '../../assets/images/about-03.svg';

function About() {
  return (
    <section className={style.about}>
      <h2 className={style.about__heading}>
        <span>Why you&apos;ll love learning with </span>
        <span className={style.about__brand}>HyperEnglish</span>
      </h2>

      <div className={style.about__grid}>
        <div className={style.about__text}>
          <p className={style.about__number}>01</p>
          <h3 className={style['about__heading-sub']}>
            The easy way to learn English
          </h3>
          <p className={style.about__paragraph}>
            Learning with HyperEnglish is function! With quick, bite-sized
            lessons, you&apos;ll earn points and unlock new levels.
          </p>
        </div>
        <div className={style.about__img}>
          <img src={aboutImg1} alt="Icon" />
        </div>
      </div>

      <div className={style.about__grid}>
        <div className={style.about__text}>
          <p className={style.about__number}>02</p>
          <h3 className={style['about__heading-sub']}>
            Effective and Efficient
          </h3>
          <p className={style.about__paragraph}>
            Our vocabulary effectively and efficiently teaches reading,
            listening, and speaking skills.
          </p>
        </div>
        <div className={style.about__img}>
          <img src={aboutImg2} alt="Icon" />
        </div>
      </div>
    </section>
  );
}

export default About;

/* <div className={style.about__img}>
          <img src={aboutImg2} alt="Icon" />
        </div>
        <div className={style.about__text}>
          <p className={style.about__number}>02</p>
          <h3 className={style['about__heading-sub']}>
            Effective and Efficient
          </h3>
          <p className={style.about__paragraph}>
            Our vocabulary effectively and efficiently teaches reading,
            listening, and speaking skills.
          </p>
        </div>
        <div className={style.about__text}>
          <p className={style.about__number}>03</p>
          <h3 className={style['about__heading-sub']}>Have fun with it!</h3>
          <p className={style.about__paragraph}>
            Our vocabularies effectively and efficiently teach reading,
            listening, and speaking skills.
          </p>
        </div>
        <div className={style.about__img}>
          <img src={aboutImg3} alt="Icon" />
        </div>
      </div> */
