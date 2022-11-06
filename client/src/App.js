import React from 'react';

import { GlobalStyles } from './components';
// prettier-ignore
import {
  Header,
  Carousel,
  About,
  Mission,
  Testimonial,
} from './layouts';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <main>
        <Carousel />
        <About />
        <Mission />
        <Testimonial />
      </main>
    </GlobalStyles>
  );
}

export default App;
