import React from 'react';

import { GlobalStyles } from './components';
import {
  Header,
  HeroSection,
  About,
  Mission,
  Products,
  Testimonial,
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
    </GlobalStyles>
  );
}

export default App;
