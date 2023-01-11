import React from 'react';
import ReactDOM from 'react-dom';

import styles from './VocabularyCompletion.module.scss';
import { Button } from 'components';
import icon from '../../../assets/icons/vocabulary-completion.svg';

type VocabularyCompletionModalProps = {
  closeModal(): void;
};

type VocabularyCompletionProps = {
  onHandleModal(): void;
};

function VocabularyCompletionModal({ closeModal }: VocabularyCompletionModalProps) {
  return (
    <div className={styles.completion}>
      <div className={styles.completion__img}>
        <img src={icon} alt="Cup icon" />
      </div>
      <p className={styles.completion__message}>You completed this lesson!</p>
      <div className={styles.completion__actions}>
        <Button onClick={closeModal}>Back</Button>
        <Button solid to="/lessons">
          Continue
        </Button>
      </div>
    </div>
  );
}

function VocabularyCompletion({ onHandleModal }: VocabularyCompletionProps) {
  return ReactDOM.createPortal(
    <VocabularyCompletionModal closeModal={onHandleModal} />,
    document.getElementById('completion-modal') as HTMLElement,
  );
}

export default VocabularyCompletion;
