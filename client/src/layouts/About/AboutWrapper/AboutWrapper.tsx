import React, { memo } from 'react';

import styles from './AboutWrapper.module.scss';
import AboutItem from '../AboutItem';
import { AboutItemProps } from 'models';
import { useFetch } from 'hooks';
import { DataConsuming } from 'components';

type AboutContent = {
  data: AboutItemProps[];
};

function AboutWrapper() {
  const [loading, error, payload] = useFetch<AboutContent>('about');

  return (
    <section className={styles.about} id="about">
      <div className={styles.about__content}>
        <h2 className={styles.heading}>
          <span>Why you&apos;ll love learning with </span>
          <span className={styles.heading__brand}>HyperEnglish</span>
        </h2>
        <DataConsuming {...{ Comp: AboutItem, loading, error, payload }} />
      </div>
    </section>
  );
}

export default memo(AboutWrapper);
