/* eslint-disable object-curly-newline */
import React from 'react';

import { GlobalStyles } from './components';
import { Header, HeroSection, About, Mission, Testimonial } from './layouts';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <HeroSection />
      <About />
      <Mission />
      <Testimonial />
    </GlobalStyles>
  );
}

export default App;
