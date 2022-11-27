import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

import style from './LessonsWrapper.module.scss';
import LessonItem from '../LessonItem';
import data from '../../data';

function LessonsWrapper() {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

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
