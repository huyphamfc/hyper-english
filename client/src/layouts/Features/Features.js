import React, { memo } from 'react';

import style from './Features.module.scss';
import logo1 from '../../assets/icons/features-businessinsider.svg';
import logo2 from '../../assets/icons/features-forbes.svg';
import logo3 from '../../assets/icons/features-newyorktime.svg';
import logo4 from '../../assets/icons/features-techcrunch.svg';

function Features() {
  console.log('Render: Feature');

  return (
    <section className={style.features}>
      <div className={style.container}>
        <p className={style.text}>AS FEATURES IN</p>
        <div className={style.logos}>
          <img src={logo3} alt="The New York Times logo" />
          <img src={logo1} alt="Business Insider logo" />
          <img src={logo2} alt="Forbes logo" />
          <img src={logo4} alt="TechCrunch logo" />
        </div>
      </div>
    </section>
  );
}

export default memo(Features);
