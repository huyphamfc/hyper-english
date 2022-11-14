import React from 'react';

import style from './style.module.scss';
import AboutItem from '../AboutItem';
import data from '../../data';

function About() {
  const about = data.map((item) => (
    <AboutItem
      key={item.index}
      index={item.index}
      title={item.title}
      content={item.content}
      imgSrc={item.imgSrc}
      imgAlt={item.imgAlt}
    />
  ));

  return (
    <section className={style.about} id="about">
      <div className={style.container}>
        <h2 className={style.heading}>
          <span>Why you&apos;ll love learning with </span>
          <span className={style.brand}>HyperEnglish</span>
        </h2>
        <ul>{about}</ul>
      </div>
    </section>
  );
}

export default About;
