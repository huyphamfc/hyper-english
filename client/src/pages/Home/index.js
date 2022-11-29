import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import {
  HeroSection,
  About,
  Missions,
  Products,
  Testimonials,
  Application,
  Features,
  Footer,
  BackToTop,
} from '../../layouts';

function Home() {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isAuth) {
    return <Navigate to="/lessons" state={{ from: location }} replace />;
  }

  return (
    <BackToTop Target={HeroSection}>
      <About />
      <Missions />
      <Products />
      <Testimonials />
      <Application />
      <Features />
      <Footer />
    </BackToTop>
  );
}

export default Home;
