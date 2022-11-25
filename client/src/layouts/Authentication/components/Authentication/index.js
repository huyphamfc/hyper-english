import React from 'react';
import { Routes, Route } from 'react-router-dom';

import style from './style.module.scss';
import Signup from '../Signup';
import Login from '../Login';

function Authentication() {
  return (
    <section className={style.auth}>
      <div className={style.container}>
        <h1 className={style.brand}>HyperEnglish</h1>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </section>
  );
}

export default Authentication;
