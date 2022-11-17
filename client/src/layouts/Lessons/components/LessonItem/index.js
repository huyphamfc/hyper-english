import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';
import { Button } from '../../../../components';

function LessonNumberItem({ name, lessonNumber }) {
  return (
    <li className={style.item}>
      <span className={style.number}>{lessonNumber}</span>
      <h2>{name}</h2>
      <div className={style.overlay}>
        <Button solid>Learn!</Button>
      </div>
    </li>
  );
}

LessonNumberItem.propTypes = {
  lessonNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default LessonNumberItem;
