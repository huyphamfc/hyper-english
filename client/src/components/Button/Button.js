import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

function Button({
  className,
  solid,
  outline,
  transparent,
  white,
  round,
  iconLeft,
  iconImgLeft,
  iconRight,
  iconImgRight,
  onClick,
  children,
}) {
  const btnClass = classNames(style.btn, {
    [style.solid]: solid,
    [style.outline]: outline,
    [style.transparent]: transparent,
    [style.white]: white,
    [style.round]: round,
  });

  return (
    <button
      className={`${className} ${btnClass}`}
      type="button"
      onClick={onClick}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {iconImgLeft && <span className={style.iconImg}>{iconImgLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span>{iconRight}</span>}
      {iconImgRight && <span className={style.iconImg}>{iconImgRight}</span>}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  solid: PropTypes.bool,
  outline: PropTypes.bool,
  transparent: PropTypes.bool,
  white: PropTypes.bool,
  round: PropTypes.bool,
  iconLeft: PropTypes.element,
  iconImgLeft: PropTypes.element,
  iconRight: PropTypes.element,
  iconImgRight: PropTypes.element,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  className: null,
  solid: false,
  outline: false,
  transparent: false,
  white: false,
  round: false,
  iconLeft: null,
  iconImgLeft: null,
  iconRight: null,
  iconImgRight: null,
  onClick: null,
  children: null,
};

export default Button;
