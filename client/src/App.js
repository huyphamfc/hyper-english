import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import publicRoutes from './routes';

function App() {
  const routes = publicRoutes.map((route) => {
    const Content = route.component;
    return <Route key={route.id} path={route.path} element={<Content />} />;
  });

  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;
