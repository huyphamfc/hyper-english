import React from 'react';

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
