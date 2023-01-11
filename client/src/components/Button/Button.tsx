import React, { memo, MouseEventHandler, ElementType, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import styles from './Button.module.scss';

type ButtonProps = {
  href?: string;
  to?: string;

  solid?: boolean;
  outline?: boolean;
  white?: boolean;

  toggle?: boolean;
  backToTop?: boolean;

  leftImgIcon?: string;
  rightImgIcon?: string;

  onClick?: MouseEventHandler<HTMLElement>;

  children?: ReactNode;
};

type CompType = ElementType | LinkProps;

function Button(props: ButtonProps) {
  const {
    href,
    to,
    solid,
    outline,
    white,
    toggle,
    backToTop,
    leftImgIcon,
    rightImgIcon,
    children,
  } = props;
  let { onClick } = props;

  let Comp: CompType = 'button';
  if (href) Comp = 'a';
  if (to) Comp = Link;

  let compClassName = styles.btn;
  if (solid) compClassName += ' ' + styles['btn--solid'];
  if (outline) compClassName += ' ' + styles['btn--outline'];
  if (white) compClassName += ' ' + styles['btn--white'];
  if (toggle) compClassName += ' ' + styles['btn--toggle'];
  if (backToTop) {
    compClassName += ' ' + styles['btn--back-to-top'];

    onClick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  }

  const compProps = {
    className: compClassName,
    href,
    to,
    onClick,
  };

  return (
    <Comp {...compProps}>
      {leftImgIcon && (
        <span className={styles.btn__icon}>
          <img src={leftImgIcon} alt="Icon" />
        </span>
      )}
      {children && <span>{children}</span>}
      {rightImgIcon && (
        <span className={styles.btn__icon}>
          <img src={rightImgIcon} alt="Icon" />
        </span>
      )}
    </Comp>
  );
}

export default memo(Button);
