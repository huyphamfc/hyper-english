/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

import './slick.css';
import style from './Testimonial.module.scss';
import { TestimonialItem } from '../../components';

import face1 from '../../assets/faces/face-01.jpg';
import face2 from '../../assets/faces/face-02.jpg';
import face3 from '../../assets/faces/face-03.jpg';
import face4 from '../../assets/faces/face-04.jpg';
import face5 from '../../assets/faces/face-05.jpg';
import quoteIcon from '../../assets/icons/testimonial-quote.svg';

const dummyData = [
  {
    avatarSrc: face1,
    avatarAlt: 'A female face',
    quote:
      "The best app I've ever used. I really improved my English with it. Not only pronunciation, fluency, intonation, word stress and listening.",
    author: 'Selena',
  },
  {
    avatarSrc: face2,
    avatarAlt: 'A male face',
    quote:
      'The app is simply amazing. It has a lot of different tools to help you learn everything about the language.',
    author: 'Tommy',
  },
  {
    avatarSrc: face3,
    avatarAlt: 'A female face',
    quote:
      "This app is great. I'm that person that NEVER writes reviews. It's that good... Amazing easy interface for everyday.",
    author: 'Elsa',
  },
  {
    avatarSrc: face4,
    avatarAlt: 'A female face',
    quote:
      'I love this app! It helps me speak English fluently and fix my strong accent. I can see my improvement clearly after 3 months',
    author: 'Jack',
  },
  {
    avatarSrc: face5,
    avatarAlt: 'A female face',
    quote:
      'My teacher recommended this app to me. I tried and it really works! My pronunciation was very bad. After using the app, I find that my speaking skill improves day by day. Thank you team!',
    author: 'Harlie',
  },
];

function Testimonial() {
  const quotes = dummyData.map((item) => (
    <TestimonialItem
      key={Math.random()}
      avatarSrc={item.avatarSrc}
      avatarAlt={item.avatarAlt}
      quoteIcon={quoteIcon}
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
    <section className={style.testimonial}>
      <h2 className={style.heading}>What learners are saying</h2>
      <Slider {...settings}>{quotes}</Slider>
    </section>
  );
}

export default Testimonial;
