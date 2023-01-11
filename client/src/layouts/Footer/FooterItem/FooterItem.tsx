import React from 'react';

import styles from './FooterItem.module.scss';

type FooterItemProps = {
  title: string;
  content: string[];
  area: string;
};

function FooterItem(props: FooterItemProps) {
  const { title, content, area } = props;

  const items = content.map((item) => <li key={Math.random()}>{item}</li>);

  return (
    <div className={styles.footer} style={{ gridArea: area }}>
      <h3 className={styles.footer__title}>{title}</h3>
      <ul className={styles.footer__items}>{items}</ul>
    </div>
  );
}

export default FooterItem;
