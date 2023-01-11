import React, { memo } from 'react';

import styles from './VocabularyActions.module.scss';
import { Button } from 'components';

type VocabularyActionsProps = {
  onHandleVocabulary(action: 'prev' | 'next'): void;
};

function VocabularyActions({ onHandleVocabulary }: VocabularyActionsProps) {
  return (
    <div className={styles.actions}>
      <Button outline onClick={() => onHandleVocabulary('prev')}>
        prev
      </Button>
      <Button solid onClick={() => onHandleVocabulary('next')}>
        next
      </Button>
    </div>
  );
}

export default memo(VocabularyActions);
