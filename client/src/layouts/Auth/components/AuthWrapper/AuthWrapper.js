import React from 'react';
import { Routes, Route } from 'react-router-dom';

import style from './AuthWrapper.module.scss';
import Signup from '../Signup';
import Login from '../Login';

function AuthWrapper() {
  console.log('Render: AuthWrapper');

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

export default AuthWrapper;
