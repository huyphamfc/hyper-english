import React from 'react';

import styles from './VocabularyItem.module.scss';
import { VocabularyItemProps } from 'models';
import icon from '../../../assets/icons/vocabulary-speaker.svg';

function VocabularyItem(props: VocabularyItemProps) {
  const { word, pronunciation, meaning, example } = props;

  return (
    <ul className={styles.vocabulary}>
      <li className={styles.vocabulary__word}>{word}</li>
      <li className={styles.vocabulary__pronunciation}>
        <img className={styles.vocabulary__icon} src={icon} alt="Speaker icon" />
        <span>{pronunciation}</span>
      </li>
      <li className={styles.vocabulary__meaning}>{meaning}</li>
      <li className={styles.vocabulary__example}>{example}</li>
    </ul>
  );
}

export default VocabularyItem;
