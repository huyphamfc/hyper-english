import React, { useState, useEffect, useCallback } from 'react';

import styles from './VocabularyContent.module.scss';
import VocabularyActions from '../VocabularyActions';
import VocabularyCompletion from '../VocabularyCompletion';
import VocabularyItem from '../VocabularyItem';
import VocabularyStatus from '../VocabularyStatus';
import { VocabularyItemProps } from 'models';

type VocabularyContentProps = {
  vocabulary: VocabularyItemProps[];
};

function VocabularyContent({ vocabulary }: VocabularyContentProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showCompletion, setShowCompletion] = useState<boolean>(false);

  useEffect(() => {
    if (currentIndex === -1) setCurrentIndex(0);
    if (currentIndex === vocabulary.length - 1) handleModal();
  }, [currentIndex]);

  const handleVocabulary = useCallback((action: 'prev' | 'next'): void => {
    if (action === 'prev') return setCurrentIndex((state) => state - 1);
    return setCurrentIndex((state) => state + 1);
  }, []);

  const vocabularyStatus = ((currentIndex + 1) / vocabulary.length) * 100;

  const handleModal = (): void => {
    setShowCompletion((state) => !state);
  };

  return (
    <>
      <section className={styles.vocabulary}>
        <VocabularyStatus process={vocabularyStatus} />
        <VocabularyItem {...vocabulary[currentIndex]} />
        <VocabularyActions onHandleVocabulary={handleVocabulary} />
      </section>
      {showCompletion && <VocabularyCompletion onHandleModal={handleModal} />}
    </>
  );
}

export default VocabularyContent;
