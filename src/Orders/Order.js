import React from 'react';
import styled from 'styled-components';
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from '../FoodDialog/FoodDialog';
import { formatPrice } from '../data/data';

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 93px;
  width: 340px;
  background-color: white;
  height: calc(100% - 93px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  max-height: 100%;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 5px;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export const Order = ({ orders }) => {
  return (
    <OrderStyled>
      {orders?.length === 0 ? (
        <OrderContent>Nada por aquí</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Tu pedido:</OrderContainer>

          {orders.map((order) => (
            <OrderContainer>
              <OrderItem>
                <div>1</div>
                <div>{order.name}</div>
                <div>{formatPrice(order.price)}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Ir a pagar</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
};
