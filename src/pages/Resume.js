import React from 'react';
import { OrderResume } from '../components/MyOrders/OrderResume';
import { Wrapper, LayoutPage } from '../components/UI';

const Resume = () => {
  return (
    <LayoutPage>
      <Wrapper>
        <OrderResume />
      </Wrapper>
    </LayoutPage>
  );
};

export default Resume;
