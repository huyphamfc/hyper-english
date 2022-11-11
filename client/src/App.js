import React from 'react';

import { GlobalStyles } from './components';
import {
  Header,
  HeroSection,
  About,
  Mission,
  Products,
  Testimonial,
  Application,
  Features,
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
    </GlobalStyles>
  );
}

export default App;
