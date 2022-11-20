/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import style from './style.module.scss';
import ProductItem from '../ProductItem';

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/products`)
      .then((res) => res.json())
      .then((result) => setData(result.data));
  }, []);

  const products = data.map((item) => (
    <ProductItem
      key={item._id}
      title={item.title}
      bgColor={item.bgColor}
      imgSrc={`${process.env.REACT_APP_SERVER_URL}/${item.imgSrc}`}
      imgAlt={item.imgAlt}
    />
  ));

  return (
    <section className={style.products} id="products">
      <h2 className={style.heading}>Learn what you&apos;re interested in</h2>
      <ul className={style.items}>{products}</ul>
    </section>
  );
}

export default Products;
