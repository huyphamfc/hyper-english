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
    </GlobalStyles>
  );
}

export default App;
