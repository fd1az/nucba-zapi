import React from 'react';
import styled from 'styled-components';

const StyledCheckout = styled.div`
  max-width: 1440px;
  min-height: 900px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
`;

const WrapperSyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  padding: 150px;
`;

const Checkout = () => {
  return (
    <StyledCheckout>
      <WrapperSyled>
        <div style={{ backgroundColor: 'blue' }}> uno </div>
        <div style={{ backgroundColor: 'red' }}> dos</div>
      </WrapperSyled>
    </StyledCheckout>
  );
};

export default Checkout;
