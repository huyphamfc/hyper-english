import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

function Button({ solid, outline, children }) {
  const btnClass = classNames(style.btn, {
    [style.solid]: solid,
    [style.outline]: outline,
  });

  return (
    <button className={btnClass} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  solid: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  solid: false,
  outline: false,
};

export default Button;
