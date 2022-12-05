/* eslint-disable no-underscore-dangle */
import React, { memo } from 'react';

import style from './ProductsWrapper.module.scss';
import ProductItem from '../ProductItem';
import { useFetch } from '../../../../hooks';

function ProductsWrapper() {
  const { data } = useFetch('products');

  const products = data?.map((item) => (
    <ProductItem
      key={item._id}
      title={item.title}
      bgColor={item.bgColor}
      imgSrc={`${process.env.REACT_APP_SERVER_URL}/${item.imgSrc}`}
      imgAlt={item.imgAlt}
    />
  ));

  console.log('Render: ProductsWrapper');

  return (
    <section className={style.products} id="products">
      <h2 className={style.heading}>Learn what you&apos;re interested in</h2>
      <ul className={style.items}>{products}</ul>
    </section>
  );
}

export default memo(ProductsWrapper);
