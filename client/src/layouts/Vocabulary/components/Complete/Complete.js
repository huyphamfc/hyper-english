import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import style from './Complete.module.scss';
import { Button } from '../../../../components';
import image from '../../../../assets/icons/vocabulary-complete.svg';

function CompleteModal({ closeModal }) {
  return (
    <div className={style.complete}>
      <div className={style.img}>
        <img src={image} alt="Cup icon" />
      </div>
      <p className={style.message}>You completed this unit!</p>
      <div className={style.actions}>
        <Button transparent onClick={closeModal}>
          Back
        </Button>
        <Button solid to="/lessons">
          Continue
        </Button>
      </div>
    </div>
  );
}

CompleteModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

function Complete({ toggleModal }) {
  return ReactDOM.createPortal(
    <CompleteModal closeModal={toggleModal} />,
    document.getElementById('lesson-modal'),
  );
}

export default Complete;
