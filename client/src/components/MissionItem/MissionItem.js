import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './MissionItem.module.scss';

function MissionItem({ icon, title, paragraph }) {
  return (
    <div>
      <div className={style.index}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className={style.title}>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
}

MissionItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

MissionItem.defaultProps = {
  icon: null,
  title: null,
  paragraph: null,
};

export default MissionItem;
