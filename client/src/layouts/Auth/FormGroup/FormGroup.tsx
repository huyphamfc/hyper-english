import React from 'react';

import styles from './FormGroup.module.scss';

type FormGroupProps = {
  inputProps: object;
  inputWarning?: string;
  inputPlaceholder: string;
  inputType?: string;
};

function FormGroup(props: FormGroupProps) {
  const { inputProps, inputWarning, inputPlaceholder, inputType } = props;

  let inputClassName = styles.input;
  let warningClassName = styles.warning;
  if (inputWarning) {
    inputClassName += ' ' + styles['input--error'];
    warningClassName += ' ' + styles['warning--error'];
  }

  return (
    <div>
      <input
        {...inputProps}
        className={inputClassName}
        placeholder={inputPlaceholder}
        type={inputType}
      />
      <span className={warningClassName}>{inputWarning || 'Error placeholder'}</span>
    </div>
  );
}

export default FormGroup;
