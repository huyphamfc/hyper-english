import React, { memo } from 'react';

import styles from './HeaderBrand.module.scss';
import { Button } from 'components';

function HeaderBrand() {
  return (
    <h1 className={styles.brand}>
      <Button href="#">HyperEnglish</Button>
    </h1>
  );
}

export default memo(HeaderBrand);
