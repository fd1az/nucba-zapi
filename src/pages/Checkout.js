import React from 'react';
import styled from 'styled-components';
import { Wrapper, LayoutPage } from '../components/UI';
import { ShippingForm } from '../components/ShippingForm/ShippingForm';

const Checkout = () => {
  return (
    <LayoutPage>
      <Wrapper>
        <ShippingForm />
      </Wrapper>
    </LayoutPage>
  );
};

export default Checkout;
