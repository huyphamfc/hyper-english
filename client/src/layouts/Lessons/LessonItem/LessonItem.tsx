import React from 'react';

import styles from './LessonItem.module.scss';
import { LessonItemProps } from 'models';
import { Button } from 'components';

function LessonItem({ lessonNumber, title }: LessonItemProps) {
  return (
    <li className={styles.lesson}>
      <span className={styles.lesson__number}>{lessonNumber}</span>
      <h2>{title}</h2>
      <div className={styles.lesson__overlay}>
        <Button white to={`/lessons/${lessonNumber}`}>
          Learn!
        </Button>
      </div>
    </li>
  );
}

export default LessonItem;
