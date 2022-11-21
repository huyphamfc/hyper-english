import React from 'react';

import style from './style.module.scss';
import img from '../../assets/icons/page-not-found.svg';
import Button from '../Button';

function PageNotFound() {
  return (
    <section className={style.page}>
      <div className={style.container}>
        <img className={style.img} src={img} alt="Icon" />
        <p>PAGE NOT FOUND</p>
        <Button solid to="/">
          Go Home
        </Button>
      </div>
    </section>
  );
}

export default PageNotFound;
