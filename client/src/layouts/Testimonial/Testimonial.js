import React from 'react';

import style from './Testimonial.module.scss';
import { TestimonialItem } from '../../components';

import face1 from '../../assets/faces/face-01.jpg';
import quoteIcon from '../../assets/icons/testimonial-quote.svg';

const dummyData = [
  {
    avatarSrc: face1,
    avatarAlt: 'A female face',
    iconSrc: quoteIcon,
    quote:
      "The best app I've ever used. I really improved my English with it. Not only pronunciation, fluency, intonation, word stress and listening.",
    author: 'Selena',
  },
];

function Testimonial() {
  const quotes = dummyData.map((item) => (
    <TestimonialItem
      key={Math.random()}
      avatarSrc={item.avatarSrc}
      avatarAlt={item.avatarAlt}
      iconSrc={quoteIcon}
      iconAlt="Quote icon"
      quote={item.quote}
      author={item.author}
    />
  ));

  console.log(quotes);

  return (
    <div className={style.testimonial}>
      <h2 className={style.heading}>Testimonial</h2>
      <div>{quotes}</div>
    </div>
  );
}

export default Testimonial;
