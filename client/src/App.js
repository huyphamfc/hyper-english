import React from 'react';

import { GlobalStyles } from './components';
// prettier-ignore
import {
  Header,
  Carousel,
  About,
  Mission,
} from './layouts';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <main>
        <Carousel />
        <About />
        <Mission />
      </main>
    </GlobalStyles>
  );
}

export default App;
