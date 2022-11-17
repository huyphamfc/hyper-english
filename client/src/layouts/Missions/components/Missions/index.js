import React from 'react';

import style from './style.module.scss';
import MissionItem from '../MissionItem';
import data from '../../data';

function Missions() {
  const missions = data.map((item) => (
    <MissionItem
      key={item.id}
      iconSrc={item.iconSrc}
      iconAlt={item.iconAlt}
      title={item.title}
      content={item.content}
    />
  ));

  return (
    <section className={style.missions}>
      <h2 className={style.heading}>
        <span className={style.brand}>HyperEnglish</span>
        <span> with missions</span>
      </h2>
      <ul className={style.grid}>{missions}</ul>
    </section>
  );
}

export default Missions;
