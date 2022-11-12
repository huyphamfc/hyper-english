import React from 'react';

import { GlobalStyles, BackToTop } from './components';
import {
  Header,
  HeroSection,
  About,
  Mission,
  Products,
  Testimonial,
  Application,
  Features,
  Footer,
} from './layouts';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <HeroSection />
      <About />
      <Mission />
      <Products />
      <Testimonial />
      <Application />
      <Features />
      <Footer />
      <BackToTop />
    </GlobalStyles>
  );
}

export default App;
