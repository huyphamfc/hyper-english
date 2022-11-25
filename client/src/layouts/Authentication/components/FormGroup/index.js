import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.scss';

function FormGroup({ inputPlaceholder, inputType }) {
  return (
    <div>
      <input
        className={style.input}
        placeholder={inputPlaceholder}
        type={inputType}
      />
      <span className={style.warning}>Warning</span>
    </div>
  );
}

FormGroup.propTypes = {
  inputPlaceholder: PropTypes.string,
  inputType: PropTypes.string,
};

FormGroup.defaultProps = {
  inputPlaceholder: null,
  inputType: 'text',
};

export default FormGroup;
