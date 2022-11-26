/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.scss';

// prettier-ignore
function FormGroup({
  inputProps,
  inputWarning,
  inputPlaceholder,
  inputType,
}) {
  const inputClass = classNames(style.input, {
    [style['input--error']]: inputWarning,
  });

  const warningClass = classNames(style.warning, {
    [style['warning--error']]: inputWarning,
  });

  return (
    <div>
      <input
        {...inputProps}
        className={inputClass}
        placeholder={inputPlaceholder}
        type={inputType}
      />
      <span className={warningClass}>
        {inputWarning || 'Error placeholder'}
      </span>
    </div>
  );
}

FormGroup.propTypes = {
  inputProps: PropTypes.object.isRequired,
  inputWarning: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputType: PropTypes.string,
};

FormGroup.defaultProps = {
  inputWarning: null,
  inputPlaceholder: null,
  inputType: 'text',
};

export default FormGroup;
