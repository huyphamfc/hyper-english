import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

function Button({
  className,
  solid,
  outline,
  transparent,
  iconLeft,
  iconRight,
  onClick,
  children,
}) {
  const btnClass = classNames(style.btn, {
    [style.solid]: solid,
    [style.outline]: outline,
    [style.transparent]: transparent,
  });

  return (
    <button
      className={`${className} ${btnClass}`}
      type="button"
      onClick={onClick}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  solid: PropTypes.bool,
  outline: PropTypes.bool,
  transparent: PropTypes.bool,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: null,
  solid: false,
  outline: false,
  transparent: false,
  iconLeft: null,
  iconRight: null,
  onClick: null,
  children: null,
};

export default Button;
