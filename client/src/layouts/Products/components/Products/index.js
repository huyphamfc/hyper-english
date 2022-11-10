import React from 'react';

import style from './style.module.scss';
import ProductItem from '../ProductItem';
import data from '../../data';

function Products() {
  const products = data.map((item) => (
    <ProductItem
      key={item.id}
      bgColor={item.bgColor}
      imgSrc={item.imgSrc}
      imgAlt={item.imgAlt}
      title={item.title}
    />
  ));

  return (
    <section className={style.products}>
      <h2 className={style.heading}>Learn what you&apos;re interested in</h2>
      <ul className={style.items}>{products}</ul>
    </section>
  );
}

export default Products;
