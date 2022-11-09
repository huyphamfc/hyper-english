import React from 'react';

import { GlobalStyles } from './components';
import { Header, HeroSection, About } from './layouts';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <HeroSection />
      <About />
    </GlobalStyles>
  );
}

export default App;
