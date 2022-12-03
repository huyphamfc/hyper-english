import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import publicRoutes from './routes';
import { Header } from './layouts';

function App() {
  const routes = publicRoutes.map((route) => {
    const Layout = route?.layout === null ? Fragment : Header;
    const Content = route.component;

    // prettier-ignore
    return (
      <Route
        key={route.id}
        path={route.path}
        element={(
          <>
            <Layout />
            <Content />
          </>
        )}
      />
    );
  });

  console.log('Render: App');

  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;
