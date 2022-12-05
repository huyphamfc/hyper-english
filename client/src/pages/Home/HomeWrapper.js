import React, { useState, useCallback } from 'react';

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
} from '../../layouts';

import BackToTopButton from './BackToTopButton';

function HomeWrapper() {
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

export default HomeWrapper;
