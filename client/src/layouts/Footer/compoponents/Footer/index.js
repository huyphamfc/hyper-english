import React from 'react';

import style from './style.module.scss';
import FooterBrand from '../FooterBrand';
import FooterItem from '../FooterItem';
import data from '../../data';

function Footer() {
  const footerItems = data.map((item) => (
    <FooterItem
      key={item.id}
      area={item.area}
      title={item.title}
      contents={item.contents}
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

export default Footer;
