/* eslint-disable no-underscore-dangle */
import React, { memo } from 'react';

import style from './MissionsWrapper.module.scss';
import MissionItem from '../MissionItem';
import { useFetch } from '../../../../hooks';

function MissionsWrapper() {
  const { data } = useFetch('missions');

  const missions = data?.map((item) => (
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

export default memo(MissionsWrapper);
