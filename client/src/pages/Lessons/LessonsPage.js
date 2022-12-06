import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import { Header, Lessons } from '../../layouts';

function LessonsWrapper() {
  const { isAuth } = useSelector((state) => state.auth);
  if (isAuth) {
    return (
      <>
        <Header />
        <Lessons />
      </>
    );
  }

  return <Navigate to="/" />;
}

export default LessonsWrapper;
