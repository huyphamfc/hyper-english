import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';
import quoteIcon from '../../../../assets/icons/testimonial-quote.svg';

// prettier-ignore
function TestimonialItem({
  avatarSrc,
  avatarAlt,
  quote,
  author,
}) {
  return (
    <div className={style.item}>
      <div className={style.avatar}>
        <img src={avatarSrc} alt={avatarAlt} />
      </div>
      <div className={style.icon}><img src={quoteIcon} alt="Quote icon" /></div>
      <blockquote className={style.quote}>{quote}</blockquote>
      <span className={style.author}>{`- ${author} -`}</span>
    </div>
  );
}

TestimonialItem.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  avatarAlt: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default TestimonialItem;
