import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';
import { Button } from '../../../../components';

function ProductItem(props) {
  // eslint-disable-next-line object-curly-newline
  const { bgColor, imgSrc, imgAlt, title } = props;

  return (
    <li className={style.item} style={{ backgroundColor: bgColor }}>
      <div className={style.img}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={style.text}>
        <h3 className={style.title}>{title}</h3>
        <Button white to="/lessons">
          Let&apos;s go! &rarr;
        </Button>
      </div>
    </li>
  );
}

ProductItem.propTypes = {
  bgColor: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductItem;
