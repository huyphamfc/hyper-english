import React from 'react';
import PropTypes from 'prop-types';

import style from './LessonItem.module.scss';
import { Button } from '../../../../components';

function LessonItem({ name, lessonNumber }) {
  return (
    <li className={style.item}>
      <span className={style.number}>{lessonNumber}</span>
      <h2>{name}</h2>
      <div className={style.overlay}>
        <Button white to={`/lesson/${lessonNumber}`}>
          Learn!
        </Button>
      </div>
    </li>
  );
}

LessonItem.propTypes = {
  lessonNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default LessonItem;
