import React from 'react';
import { Navigate } from 'react-router-dom';

import { Header, Lessons } from 'layouts';
import { useAppSelector } from 'hooks';

function LessonsPage() {
  const { isLogin } = useAppSelector((state) => state.auth);
  if (!isLogin) return <Navigate to="/" />;

  return (
    <>
      <Header />
      <Lessons />
    </>
  );
}

export default LessonsPage;
