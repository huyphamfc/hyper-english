import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import style from './style.module.scss';
import Button from '../Button/Button';

function BackToTop() {
  const { showBackToTop } = useSelector((state) => state.backToTop);

  const btnClass = classNames(style.button, {
    [style.show]: showBackToTop,
  });

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button className={btnClass} onClick={handleBackToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  );
}

export default BackToTop;
