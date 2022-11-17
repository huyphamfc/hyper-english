/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

import './slick.css';
import style from './style.module.scss';
import TestimonialItem from '../TestimonialItem';
import data from '../../data';

function Testimonials() {
  const quotes = data.map((item) => (
    <TestimonialItem
      key={item.id}
      avatarSrc={item.avatarSrc}
      avatarAlt={item.avatarAlt}
      quote={item.quote}
      author={item.author}
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

  return (
    <section className={style.testimonials}>
      <div className={style.container}>
        <h2 className={style.heading}>What learners are saying</h2>
        <Slider {...settings}>{quotes}</Slider>
      </div>
    </section>
  );
}

export default Testimonials;
