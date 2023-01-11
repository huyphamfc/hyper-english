import React from 'react';

import styles from './AboutItem.module.scss';
import { AboutItemProps } from 'models';

function AboutItem(props: AboutItemProps) {
  const { index, title, content, imgSrc, imgAlt } = props;

  return (
    <li className={styles.about}>
      <div className={styles.about__text}>
        <p className={styles.index}>{index}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.paragraph}>{content}</p>
      </div>
      <div className={styles.about__img}>
        <img src={`${process.env.REACT_APP_SERVER_URL}/${imgSrc}`} alt={imgAlt} />
      </div>
    </li>
  );
}

export default AboutItem;
