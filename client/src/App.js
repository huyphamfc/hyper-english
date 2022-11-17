import React from 'react';

import { GlobalStyles } from './components';
import { Header, Lessons } from './layouts';

function App() {
  return (
    <GlobalStyles>
      <Header />
      <Lessons />
    </GlobalStyles>
  );
}

export default App;
