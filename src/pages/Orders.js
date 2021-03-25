import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { MyOrders } from '../components/MyOrders/MyOrders';
import * as orderActions from '../redux/orders/order.actions';

import { CheckoutContainerStyled } from './OrdersElements';

import CheckoutBackground from '../assets/checkout.jpg';

const Orders = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  let { orders, error } = useSelector((state) => state.orders);
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchOrders = useCallback(async () => {
    await dispatch(orderActions.fetchOrders(currentUser?.id));
  }, [dispatch, currentUser]);

  if (!currentUser) {
    history.push('/');
  }
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <CheckoutContainerStyled img={CheckoutBackground}>
      <MyOrders orders={orders} />
    </CheckoutContainerStyled>
  );
};

export default Orders;
