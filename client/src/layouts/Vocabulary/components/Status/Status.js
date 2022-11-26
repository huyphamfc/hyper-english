import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import style from './Status.module.scss';
import { Button } from '../../../../components';

function Status({ process }) {
  return (
    <div className={style.status}>
      <div className={style.process}>
        <div
          className={style.process__inner}
          style={{ width: `${process}%` }}
        />
      </div>
      <Button className={style.exit} transparent to="/lessons">
        <FontAwesomeIcon icon={faXmark} />
      </Button>
    </div>
  );
}

Status.propTypes = {
  process: PropTypes.number.isRequired,
};

export default Status;
