/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import style from './style.module.scss';
import MissionItem from '../MissionItem';

function Missions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/missions`)
      .then((res) => res.json())
      .then((result) => setData(result.data));
  }, []);

  const missions = data.map((item) => (
    <MissionItem
      key={item._id}
      title={item.title}
      content={item.content}
      iconSrc={`${process.env.REACT_APP_SERVER_URL}/${item.iconSrc}`}
      iconAlt={item.iconAlt}
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
