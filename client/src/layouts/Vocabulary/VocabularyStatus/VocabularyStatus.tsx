import React from 'react';

import styles from './VocabularyStatus.module.scss';
import { Button } from 'components';
import icon from '../../../assets/icons/vocabulary-x-mark.svg';

type VocabularyStatusProps = {
  process: number;
};

function VocabularyStatus({ process }: VocabularyStatusProps) {
  const processStyle = {
    width: `${process}%`,
  };

  return (
    <div className={styles.status}>
      <div className={styles.status__process}>
        <div className={styles['status__process-inner']} style={{ ...processStyle }} />
      </div>
      <Button to="/lessons" leftImgIcon={icon} />
    </div>
  );
}

export default VocabularyStatus;
