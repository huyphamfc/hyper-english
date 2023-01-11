import React from 'react';

import styles from './Loading.module.scss';

import loadingIcon from '../../assets/icons/loading.gif';

type LoadingProps = {
  large?: boolean;
};

function Loading({ large }: LoadingProps) {
  let loadingClassName = styles.loading;
  if (large) {
    loadingClassName = loadingClassName + ' ' + styles['loading--large'];
  }

  return (
    <div className={loadingClassName}>
      <img src={loadingIcon} alt="Loading icon" />
    </div>
  );
}

export default Loading;
