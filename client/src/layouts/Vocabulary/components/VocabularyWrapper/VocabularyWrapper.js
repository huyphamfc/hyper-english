import React, { useState } from 'react';
import { useParams } from 'react-router';

import style from './VocabularyWrapper.module.scss';
import { Button } from '../../../../components';
import Status from '../Status';
import VocabularyItem from '../VocabularyItem';
import Complete from '../Complete';
import useFetch from '../../../../hooks/useFetch';

function VocabularyWrapper() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lesson } = useParams();
  const { content } = useFetch(`vocabulary/lesson/${lesson}`);

  const processStatus = content && ((currentIndex + 1) / content.length) * 100;

  const handleToggleModal = () => {
    setShowModal((state) => !state);
  };

  const handlePrevVocabulary = () => {
    if (currentIndex > 0) setCurrentIndex((state) => state - 1);
  };

  const handleNextVocabulary = () => {
    if (currentIndex + 1 < content.length) {
      setCurrentIndex((state) => state + 1);
      return;
    }

    handleToggleModal();
  };

  return (
    <>
      {content && (
        <section className={style.vocabulary}>
          <Status process={processStatus} />
          <VocabularyItem
            vocabulary={content[currentIndex].vocabulary}
            pronunciation={content[currentIndex].pronunciation}
            meaning={content[currentIndex].meaning}
            example={content[currentIndex].example}
          />
          <div className={style.actions}>
            <Button outline onClick={handlePrevVocabulary}>
              prev
            </Button>
            <Button solid onClick={handleNextVocabulary}>
              next
            </Button>
          </div>
        </section>
      )}
      {showModal && <Complete toggleModal={handleToggleModal} />}
    </>
  );
}

export default VocabularyWrapper;
