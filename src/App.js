import React, { useEffect } from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';

import { Navbar } from './components/Navbar/Navbar';

import { Order } from './components/Orders/Order';

import { useOpenFood } from './hooks/useOpenFood';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Resume from './pages/Resume';
import Orders from './pages/Orders';

import { useSelector, useDispatch } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import * as userActions from './redux/user/user-actions';

function onAuthStateChange(cb, action) {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot((snapShot) => {
        cb(action({ id: snapShot.id, ...snapShot.data() }));
      });
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const opendFood = useOpenFood();
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => {
      unsubcribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Order />
      <Switch>
        <Route exact path="/">
          <Home opendFood={opendFood} />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/mis-ordenes">
          <Orders />
        </Route>
        <Route exact path={`/mis-ordenes/:orderId`}>
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
