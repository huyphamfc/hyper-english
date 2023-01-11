import React from 'react';

import styles from './ProductItem.module.scss';
import { Button } from 'components';
import { ProductItemProps } from 'models';

function ProductItem(props: ProductItemProps) {
  const { title, bgColor, imgSrc, imgAlt } = props;

  return (
    <li className={styles.product} style={{ backgroundColor: bgColor }}>
      <div className={styles.img}>
        <img src={`${process.env.REACT_APP_SERVER_URL}/${imgSrc}`} alt={imgAlt} />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <Button white to="/auth/login">
          Let&apos;s go! &rarr;
        </Button>
      </div>
    </li>
  );
}

export default ProductItem;
