import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import {
  Header,
  HeroSection,
  About,
  Missions,
  Products,
  Testimonials,
  Application,
  Features,
  Footer,
} from '../../../layouts';

import BackToTopButton from '../BackToTopButton';

function HomePage() {
  const { isAuth } = useSelector((state) => state.auth);
  if (isAuth) return <Navigate to="/lessons" />;

  const [showBackToTop, setShowBackToTop] = useState(true);

  const handleBackToTop = useCallback(() => {
    setShowBackToTop((state) => !state);
  }, []);

  return (
    <>
      <Header />
      <HeroSection toggleBackToTop={handleBackToTop} />
      <About />
      <Missions />
      <Products />
      <Testimonials />
      <Application />
      <Features />
      <Footer />
      {showBackToTop && <BackToTopButton />}
    </>
  );
}

export default HomePage;
