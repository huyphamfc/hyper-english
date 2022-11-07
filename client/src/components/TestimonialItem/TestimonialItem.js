import React from 'react';
import PropTypes from 'prop-types';

import style from './TestimonialItem.module.scss';

function TestimonialItem({
  avatarSrc,
  avatarAlt,
  iconSrc,
  iconAlt,
  quote,
  author,
}) {
  <div className={style.item}>
    <div className={style.avatar}>
      <img src={avatarSrc} alt={avatarAlt} />
    </div>
    <div className={style.icon}>
      <img src={iconSrc} alt={iconAlt} />
    </div>
    <p className={style.quote}>{quote}</p>
    <span>{author}</span>
  </div>;
}

TestimonialItem.propTypes = {
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string,
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string,
};

export default TestimonialItem;
