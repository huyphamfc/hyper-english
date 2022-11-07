import React from 'react';
import PropTypes from 'prop-types';

import style from './TestimonialItem.module.scss';

// prettier-ignore
function TestimonialItem({
  avatarSrc,
  avatarAlt,
  quoteIcon,
  quote,
  author,
}) {
  return (
    <div className={style.item}>
      <div className={style.avatar}>
        <img src={avatarSrc} alt={avatarAlt} />
      </div>
      <div className={style.icon}><img src={quoteIcon} alt="Quote icon" /></div>
      <p className={style.quote}>{quote}</p>
      <span className={style.author}>{`- ${author} -`}</span>
    </div>
  );
}

TestimonialItem.propTypes = {
  avatarSrc: PropTypes.string,
  avatarAlt: PropTypes.string,
  quoteIcon: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string,
};

TestimonialItem.defaultProps = {
  avatarSrc: null,
  avatarAlt: null,
  quote: null,
  quoteIcon: null,
  author: null,
};

export default TestimonialItem;
