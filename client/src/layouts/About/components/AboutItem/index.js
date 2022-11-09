import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

// prettier-ignore
function AboutItem({
  index,
  title,
  content,
  imgSrc,
  imgAlt,
}) {
  return (
    <li className={style.grid}>
      <div className={style.text}>
        <p className={style.index}>{index}</p>
        <h3 className={style.title}>{title}</h3>
        <p>{content}</p>
      </div>
      <div className={style.img}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </li>
  );
}

AboutItem.propTypes = {
  index: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

AboutItem.defaultProps = {
  index: null,
  title: null,
  content: null,
  imgSrc: null,
  imgAlt: null,
};

export default AboutItem;
