import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import style from './style.module.scss';
import Button from '../../../../components/Button/Button';

function BackToTop() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button className={style.button} onClick={handleBackToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  );
}

export default BackToTop;
