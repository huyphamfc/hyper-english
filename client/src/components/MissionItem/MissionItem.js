/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './MissionItem.module.scss';

function MissionItem({ icon, title, paragraph }) {
  return (
    <li>
      <div className={style.index}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className={style.title}>{title}</h3>
      <p>{paragraph}</p>
    </li>
  );
}

MissionItem.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

MissionItem.defaultProps = {
  icon: null,
  title: null,
  paragraph: null,
};

export default MissionItem;
