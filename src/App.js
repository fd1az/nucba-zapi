import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';

import { Navbar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { Menu } from './components/Menu/Menu';
import { FoodDialog } from './components/FoodDialog/FoodDialog';
import { Order } from './components/Orders/Order';

import { useOpenFood } from './hooks/useOpenFood';

import { formatPrice } from './data/data';

function App() {
  const opendFood = useOpenFood();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...opendFood} />
      <Navbar />
      <Order />
      <Banner>
        <h2>Las comidas mas Piolas del Oeste</h2>
        <p>Pedí online rápido y fácil</p>
      </Banner>
      <Menu {...opendFood} />
    </>
  );
}

export default App;
