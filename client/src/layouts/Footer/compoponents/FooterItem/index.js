/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

function FooterItem({ area, title, contents }) {
  const items = contents.map((item) => <li key={Math.random()}>{item}</li>);

  return (
    <div className={style.container} style={{ gridArea: area }}>
      <h4 className={style.title}>{title}</h4>
      <ul className={style.item}>{items}</ul>
    </div>
  );
}

FooterItem.propTypes = {
  area: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.array.isRequired,
};

export default FooterItem;
