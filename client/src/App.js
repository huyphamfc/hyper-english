import React from 'react';

import { GlobalStyles } from './components';
import { Header, Carousel } from './layouts';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <main>
        <Carousel />
      </main>
    </GlobalStyles>
  );
}

export default App;
