import React from 'react';

import style from './style.module.scss';
import AboutItem from '../AboutItem';
import useFetch from '../../../../hooks/useFetch';

function About() {
  const { data } = useFetch('about');

  const about = data?.map((item) => (
    <AboutItem
      key={item.index}
      index={item.index}
      title={item.title}
      content={item.content}
      imgSrc={`${process.env.REACT_APP_SERVER_URL}/${item.imgSrc}`}
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
