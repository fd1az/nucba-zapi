import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';

import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner>
        <h2>Las comidas mas Piolas del Oeste</h2>
        <p>Pedí online rápido y fácil</p>
      </Banner>
    </>
  );
}

export default App;
