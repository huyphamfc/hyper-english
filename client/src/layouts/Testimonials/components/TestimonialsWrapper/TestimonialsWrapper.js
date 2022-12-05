/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import Slider from 'react-slick';

import './slick.css';
import style from './TestimonialsWrapper.module.scss';
import TestimonialItem from '../TestimonialItem';
import { useFetch } from '../../../../hooks';

function TestimonialsWrapper() {
  const { data } = useFetch('testimonials');

  const quotes = data?.map((item) => (
    <TestimonialItem
      key={item._id}
      author={item.author}
      quote={item.quote}
      avatarSrc={`${process.env.REACT_APP_SERVER_URL}/${item.avatarSrc}`}
      avatarAlt={item.avatarAlt}
    />
  ));

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

  console.log('Render: TestimonialsWrapper');

  return (
    <section className={style.testimonials}>
      <div className={style.container}>
        <h2 className={style.heading}>What learners are saying</h2>
        <Slider {...settings}>{quotes}</Slider>
      </div>
    </section>
  );
}

export default memo(TestimonialsWrapper);
