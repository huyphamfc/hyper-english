import React from 'react';

import style from './LessonsWrapper.module.scss';
import LessonItem from '../LessonItem';
import data from '../../data';

function LessonsWrapper() {
  const lessons = data.map((item) => (
    <LessonItem
      key={item.id}
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
