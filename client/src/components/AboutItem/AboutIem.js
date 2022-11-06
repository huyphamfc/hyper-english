import React from 'react';
import PropTypes from 'prop-types';

import style from './AboutItem.module.scss';

// prettier-ignore
function AboutItem({
  number,
  title,
  content,
  imgSrc,
  imgAlt,
}) {
  return (
    <div className={style.grid}>
      <div className={style.text}>
        <p className={style.index}>{number}</p>
        <h3 className={style.title}>{title}</h3>
        <p>{content}</p>
      </div>
      <div className={style.img}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
}

AboutItem.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

AboutItem.defaultProps = {
  number: 0,
  title: null,
  content: null,
  imgSrc: null,
  imgAlt: null,
};

export default AboutItem;
