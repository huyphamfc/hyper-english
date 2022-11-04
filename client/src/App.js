import React from 'react';

import { GlobalStyles } from './components';
import { Header, Carousel, About } from './layouts';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <main>
        <Carousel />
        <About />
      </main>
    </GlobalStyles>
  );
}

export default App;
