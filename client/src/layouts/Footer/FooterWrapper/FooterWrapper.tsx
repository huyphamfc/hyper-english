import React, { memo } from 'react';

import styles from './FooterWrapper.module.scss';
import FooterBrand from '../FooterBrand';
import FooterItem from '../FooterItem';
import data from '../data';

function FooterWrapper() {
  const items = data.map(({ id, ...itemProps }) => <FooterItem key={id} {...itemProps} />);

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footer__content}>
        <FooterBrand />
        {items}
      </div>
    </footer>
  );
}

export default memo(FooterWrapper);
