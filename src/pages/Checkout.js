import React from 'react';
import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  CheckoutContainerStyled,
  CheckoutIllustration,
  CheckoutImage,
  CheckoutGridContainer,
} from './CheckoutElements';

import CheckoutBackground from '../assets/checkout.jpg';
import CheckoutIllustrationSource from '../assets/checkoutIllustration.png';

const Checkout = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();

  if (!currentUser) {
    history.push('/login');
  }

  return (
    <CheckoutContainerStyled img={CheckoutBackground}>
      <CheckoutGridContainer>
        <CheckoutIllustration>
          <CheckoutImage src={CheckoutIllustrationSource} />
        </CheckoutIllustration>
        <CheckoutForm />
      </CheckoutGridContainer>
    </CheckoutContainerStyled>
  );
};

export default Checkout;
