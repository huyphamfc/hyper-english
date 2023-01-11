import React, { memo } from 'react';

import styles from './MissionWrapper.module.scss';
import MissionItem from '../MissionItem';
import { MissionItemProps } from 'models';
import { DataConsuming } from 'components';
import { useFetch } from 'hooks';

type MissionContent = {
  data: MissionItemProps[];
};

function MissionWrapper() {
  const [loading, error, payload] = useFetch<MissionContent>('missions');

  return (
    <section className={styles.missions}>
      <h2 className={styles.heading}>
        <span className={styles.heading__brand}>HyperEnglish</span>
        <span> with missions</span>
      </h2>
      <DataConsuming {...{ Comp: MissionItem, loading, error, payload }} />
    </section>
  );
}

export default memo(MissionWrapper);
