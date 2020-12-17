import React from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';

import { Navbar } from './components/Navbar/Navbar';

import { Order } from './components/Orders/Order';

import { useOpenFood } from './hooks/useOpenFood';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  const opendFood = useOpenFood();

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Order />
      <Switch>
        <Route exact path="/">
          <Home opendFood={opendFood} />
        </Route>
        <Route paht="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
