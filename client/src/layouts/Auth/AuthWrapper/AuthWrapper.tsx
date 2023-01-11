import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './AuthWrapper.module.scss';
import SignUp from '../SignUp';
import Login from '../Login/Login';

function AuthWrapper() {
  return (
    <section className={styles.auth}>
      <div className={styles.auth__content}>
        <h1 className={styles.auth__brand}>HyperEnglish</h1>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </section>
  );
}

export default AuthWrapper;
