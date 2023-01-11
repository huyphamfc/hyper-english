import React from 'react';

import styles from './MissionItem.module.scss';
import { MissionItemProps } from 'models';

function MissionItem(props: MissionItemProps) {
  const { title, content, iconSrc, iconAlt } = props;

  return (
    <li className={styles.mission}>
      <div className={styles.mission__img}>
        <img src={`${process.env.REACT_APP_SERVER_URL}/${iconSrc}`} alt={iconAlt} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{content}</p>
    </li>
  );
}

export default MissionItem;
