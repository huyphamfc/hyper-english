import React from 'react';

import style from './About.module.scss';
import { AboutItem } from '../../components';

import aboutImg1 from '../../assets/images/about-01.svg';
import aboutImg2 from '../../assets/images/about-02.svg';
import aboutImg3 from '../../assets/images/about-03.svg';

const dummyData = [
  {
    number: 1,
    title: 'The easy way to learn English',
    content:
      'Learning with HyperEnglish is function! With quick, bite-sized lessons, you&apos;ll learn points and unlock new levels.',
    imgSrc: aboutImg1,
    imgAlt: 'Laptop icon',
  },
  {
    number: 2,
    title: 'Effective and Efficient',
    content:
      'Our vocabulary effectively and efficiently teaches reading, listening, and speaking skills.',
    imgSrc: aboutImg2,
    imgAlt: 'Chart icon',
  },
  {
    number: 3,
    title: 'Have fun with it!',
    content:
      "Effective learning doesn't have to be boring! Build your skills each day with engaging exercises and playful characters.",
    imgSrc: aboutImg3,
    imgAlt: 'Fun face icon',
  },
];

function About() {
  const about = dummyData.map((item) => (
    <AboutItem
      key={Math.random()}
      number={item.number}
      title={item.title}
      content={item.content}
      imgSrc={item.imgSrc}
      imgAlt={item.imgAlt}
    />
  ));

  return (
    <section className={style.about}>
      <h2 className={style.about__heading}>
        <span>Why you&apos;ll love learning with </span>
        <span className={style.about__brand}>HyperEnglish</span>
      </h2>
      {about}
    </section>
  );
}

export default About;
