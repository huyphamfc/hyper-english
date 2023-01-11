import React from 'react';

import styles from './TestimonialItem.module.scss';
import quoteIcon from 'assets/icons/testimonial-quote.svg';
import { TestimonialItemProps } from 'models';

function TestimonialItem(props: TestimonialItemProps) {
  const { author, quote, avatarSrc, avatarAlt } = props;

  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonial__avatar}>
        <img src={`${process.env.REACT_APP_SERVER_URL}/${avatarSrc}`} alt={avatarAlt} />
      </div>
      <div className={styles.testimonial__icon}>
        <img src={quoteIcon} alt="Quote icon" />
      </div>
      <blockquote className={styles.testimonial__quote}>{quote}</blockquote>
      <span className={styles.testimonial__author}>{`- ${author} -`}</span>
    </div>
  );
}

export default TestimonialItem;
