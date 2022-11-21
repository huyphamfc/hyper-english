import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './style.module.scss';

function Button({
  className,
  solid,
  outline,
  transparent,
  white,
  iconLeft,
  iconImgLeft,
  iconRight,
  iconImgRight,
  onClick,
  children,
  href,
  to,
}) {
  const btnClass = classNames(style.btn, {
    [style.solid]: solid,
    [style.outline]: outline,
    [style.transparent]: transparent,
    [style.white]: white,
  });

  let Comp = 'button';
  if (href) Comp = 'a';
  if (to) Comp = Link;

  return (
    <Comp
      className={`${className} ${btnClass}`}
      href={href}
      to={to}
      onClick={onClick}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {iconImgLeft && <span className={style.iconImg}>{iconImgLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span>{iconRight}</span>}
      {iconImgRight && <span className={style.iconImg}>{iconImgRight}</span>}
    </Comp>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  solid: PropTypes.bool,
  outline: PropTypes.bool,
  transparent: PropTypes.bool,
  white: PropTypes.bool,
  iconLeft: PropTypes.element,
  iconImgLeft: PropTypes.element,
  iconRight: PropTypes.element,
  iconImgRight: PropTypes.element,
  onClick: PropTypes.func,
  children: PropTypes.node,
  href: PropTypes.string,
  to: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  solid: false,
  outline: false,
  transparent: false,
  white: false,
  iconLeft: null,
  iconImgLeft: null,
  iconRight: null,
  iconImgRight: null,
  onClick: null,
  children: null,
  href: null,
  to: null,
};

export default Button;
