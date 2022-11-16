import React, { useState } from 'react';

import style from './style.module.scss';
import { Button } from '../../../../components';
import Status from '../Status';
import VocabularyItem from '../VocabularyItem';
import Complete from '../Complete';
import { unit1 } from '../../data';

function Vocabulary() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = unit1;
  const processStatus = ((currentIndex + 1) / content.length) * 100;

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
      <section className={style.vocabulary}>
        <Status process={processStatus} />
        <VocabularyItem
          vocabulary={content[currentIndex].vocabulary}
          pronunciation={content[currentIndex].pronunciation}
          meaning={content[currentIndex].meaning}
          example={content[currentIndex].example}
        />
        <div className={style.actions}>
          <Button outline onClick={handlePrevVocabulary} type="button">
            prev
          </Button>
          <Button solid onClick={handleNextVocabulary} type="button">
            next
          </Button>
        </div>
      </section>
      {showModal && <Complete toggleModal={handleToggleModal} />}
    </>
  );
}

export default Vocabulary;
