import React, { memo } from 'react';

import style from './FooterWrapper.module.scss';
import FooterBrand from '../FooterBrand';
import FooterItem from '../FooterItem';
import data from '../../data';

function FooterWrapper() {
  const footerItems = data.map((item) => (
    <FooterItem
      key={item.id}
      area={item.area}
      title={item.title}
      content={item.content}
    />
  ));

  return (
    <footer className={style.footer} id="contact">
      <div className={style.container}>
        <FooterBrand />
        {footerItems}
      </div>
    </footer>
  );
}

export default memo(FooterWrapper);
