import React from 'react';

import { GlobalStyles } from './components';
import { Header } from './layouts';
import Home from './pages/Home';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <Home />
    </GlobalStyles>
  );
}

export default App;
