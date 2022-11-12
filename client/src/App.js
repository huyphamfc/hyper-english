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
    </GlobalStyles>
  );
}

export default App;
