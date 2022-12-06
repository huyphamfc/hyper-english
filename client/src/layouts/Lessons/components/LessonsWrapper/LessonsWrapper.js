import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import LessonsContent from '../LessonsContent';

function LessonsWrapper() {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) return <LessonsContent />;
  return <Navigate to="/" replace />;
}

export default LessonsWrapper;
