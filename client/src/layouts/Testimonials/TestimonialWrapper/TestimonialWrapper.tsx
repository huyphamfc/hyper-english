import React, { memo } from 'react';
import Slider from 'react-slick';

import styles from './TestimonialsWrapper.module.scss';
import './slick.scss';
import TestimonialItem from '../TestimonialItem';
import { TestimonialItemProps } from 'models';
import { Loading } from 'components';
import { useFetch } from 'hooks';

type TestimonialContent = {
  data: TestimonialItemProps[];
};

function TestimonialsWrapper() {
  const [loading, error, payload] = useFetch<TestimonialContent>('testimonials');

  let content = <p className={styles.error}>Data not found.</p>;
  if (loading) content = <Loading large />;
  if (error) content = <p className={styles.error}>{error}</p>;
  if (payload) {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };

    const data = payload.data.map(({ _id, ...itemProps }) => (
      <TestimonialItem key={_id} {...itemProps} />
    ));
    content = <Slider {...settings}>{data}</Slider>;
  }

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__content}>
        <h2 className={styles.heading}>What learners are saying</h2>
        {content}
      </div>
    </section>
  );
}

export default memo(TestimonialsWrapper);
