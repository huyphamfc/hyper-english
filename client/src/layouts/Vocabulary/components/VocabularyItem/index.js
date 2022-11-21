import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

import style from './style.module.scss';

// prettier-ignore
function VocabularyItem({
  vocabulary,
  pronunciation,
  meaning,
  example,
}) {
  return (
    <ul className={style.item}>
      <li className={style.vocabulary}>{vocabulary}</li>
      <li className={style.pronunciation}>
        <span>
          <FontAwesomeIcon icon={faVolumeHigh} />
          &nbsp;
        </span>
        <span>{pronunciation}</span>
      </li>
      <li className={style.meaning}>{meaning}</li>
      <li className={style.example}>{example}</li>
    </ul>
  );
}

VocabularyItem.propTypes = {
  vocabulary: PropTypes.string,
  pronunciation: PropTypes.string,
  meaning: PropTypes.string,
  example: PropTypes.string,
};

VocabularyItem.defaultProps = {
  vocabulary: null,
  pronunciation: null,
  meaning: null,
  example: null,
};

export default VocabularyItem;
