import React, { memo } from 'react';

import styles from './ProductWrapper.module.scss';
import ProductItem from '../ProductItem';
import { ProductItemProps } from 'models';
import { DataConsuming } from 'components';
import { useFetch } from 'hooks';

type ProductContent = {
  data: ProductItemProps[];
};

function ProductWrapper() {
  const [loading, error, payload] = useFetch<ProductContent>('lessons');

  return (
    <section className={styles.products} id="products">
      <h2 className={styles.heading}>Learn what you&apos;re interested in</h2>
      <DataConsuming {...{ Comp: ProductItem, loading, error, payload }} />
    </section>
  );
}

export default memo(ProductWrapper);
