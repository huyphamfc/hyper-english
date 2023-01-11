import { useFetch } from 'hooks';
import React from 'react';

import styles from './LessonWrapper.module.scss';
import LessonItem from '../LessonItem';
import { LessonItemProps } from 'models';
import { DataConsuming } from 'components';

type LessonContent = {
  data: LessonItemProps[];
};

function LessonWrapper() {
  const [loading, error, payload] = useFetch<LessonContent>('lessons');

  return (
    <section className={styles.lessons}>
      <DataConsuming {...{ Comp: LessonItem, loading, error, payload }} />
    </section>
  );
}

export default LessonWrapper;
