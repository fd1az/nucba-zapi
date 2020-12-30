import React from 'react';
import styled from 'styled-components';
import { Wrapper, LayoutPage } from '../components/UI';
import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();

  if (!currentUser) {
    history.push('/login');
  }

  return (
    <LayoutPage>
      <Wrapper>
        <CheckoutForm />
      </Wrapper>
    </LayoutPage>
  );
};

export default Checkout;
