import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

// prettier-ignore
function MissionItem({
  iconSrc,
  iconAlt,
  title,
  content,
}) {
  return (
    <li className={style.item}>
      <div className={style.img}>
        <img src={iconSrc} alt={iconAlt} />
      </div>
      <h3 className={style.title}>{title}</h3>
      <p>{content}</p>
    </li>
  );
}

MissionItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MissionItem;
