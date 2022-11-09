/* eslint-disable object-curly-newline */
import React from 'react';

import { GlobalStyles } from './components';
import { Header, HeroSection, About, Mission } from './layouts';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <HeroSection />
      <About />
      <Mission />
    </GlobalStyles>
  );
}

export default App;
