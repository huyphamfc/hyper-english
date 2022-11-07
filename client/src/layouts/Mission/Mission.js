import React from 'react';
import {
  faChartLine,
  faFaceSmile,
  faPerson,
  faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';

import style from './Mission.module.scss';
import { MissionItem } from '../../components';

const dummyData = [
  {
    icon: faPerson,
    title: 'Personalized education',
    paragraph:
      'Everyone learns in different ways. We create the most effective educational system possible and tailor it to each student.',
  },
  {
    icon: faFaceSmile,
    title: 'Making learning fun',
    paragraph:
      "It's hard to stay motivated when learning online. People would prefer picking up new skills over playing a game.",
  },
  {
    icon: faUniversalAccess,
    title: 'Universally accessible',
    paragraph:
      'We create HyperEnglish so that everyone could have a chance to approach from everywhere in the world.',
  },
  {
    icon: faChartLine,
    title: 'Continuos improvement',
    paragraph:
      'Test questions are embedded throughout our series to measure how learners are processing and to show where HyperEnglish can improve.',
  },
];

function Mission() {
  const missions = dummyData.map((item) => (
    <MissionItem
      key={Math.random()}
      icon={item.icon}
      title={item.title}
      paragraph={item.paragraph}
    />
  ));

  return (
    <section className={style.mission}>
      <h2 className={style.heading}>Our mission</h2>
      <ul className={style.grid}>{missions}</ul>
    </section>
  );
}

export default Mission;
