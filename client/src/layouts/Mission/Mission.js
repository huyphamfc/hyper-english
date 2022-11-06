import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faFaceSmile,
  faPerson,
  faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';

import style from './Mission.module.scss';

function Mission() {
  return (
    <section className={style.mission}>
      <h2 className={style.heading}>Mission</h2>
      <div className={style.grid}>
        <div>
          <div className={style.index}>
            <FontAwesomeIcon icon={faPerson} />
          </div>
          <h3 className={style.title}>Personalized education</h3>
          <p className={style.paragraph}>
            Everyone learns in different ways. We create the most effective
            educational system possible and tailor it to each student.
          </p>
        </div>
        <div>
          <div className={style.index}>
            <FontAwesomeIcon icon={faFaceSmile} />
          </div>
          <h3 className={style.title}>Making learning fun</h3>
          <p className={style.paragraph}>
            It&apos;s hard to stay motivated when learning online. People would
            prefer picking up new skills over playing a game.
          </p>
        </div>
        <div>
          <div className={style.index}>
            <FontAwesomeIcon icon={faUniversalAccess} />
          </div>
          <h3 className={style.title}>Universally accessible</h3>
          <p className={style.paragraph}>
            We create HyperEnglish so that everyone could have a chance to
            approach from everywhere in the world.
          </p>
        </div>
        <div>
          <div className={style.index}>
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <h3 className={style.title}>Continuos improvement</h3>
          <p className={style.paragraph}>
            Test questions are embedded throughout our series to measure how
            learners are processing and to show where HyperEnglish can improve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
