import React from 'react';

import { BackToTop } from '../../components';
import {
  HeroSection,
  About,
  Missions,
  Products,
  Testimonials,
  Application,
  Features,
  Footer,
} from '../../layouts';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Missions />
      <Products />
      <Testimonials />
      <Application />
      <Features />
      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;
