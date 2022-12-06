/* eslint-disable no-underscore-dangle */
import React from 'react';

import style from './LessonsWrapper.module.scss';
import LessonItem from '../LessonItem';
import { useFetch } from '../../../../hooks';

function LessonsWrapper() {
  const { data } = useFetch('lessons');

  const lessons = data?.map((item) => (
    <LessonItem
      key={item._id}
      lessonNumber={item.lessonNumber}
      name={item.name}
    />
  ));

  return (
    <section className={style.lessons}>
      <ul className={style.items}>{lessons}</ul>
    </section>
  );
}

export default LessonsWrapper;
