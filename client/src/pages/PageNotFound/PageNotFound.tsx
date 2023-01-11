import React from 'react';

import styles from './PageNotFound.module.scss';
import { Button } from 'components';
import icon from '../../assets/icons/page-not-found.svg';

function PageNotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.page__content}>
        <img className={styles.page__img} src={icon} alt="Icon" />
        <p>PAGE NOT FOUND</p>
        <Button solid to="/">
          Go Home
        </Button>
      </div>
    </section>
  );
}

export default PageNotFound;
