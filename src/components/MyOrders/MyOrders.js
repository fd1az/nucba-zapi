import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { CustomButton } from '../UI';
import { status } from '../../Styles/utilities';
import { formatDate, formatPrice } from '../../utils';

export const Container = styled.div`
  width: 70%;
  margin: 0px 20px;
`;

export const OrderHistory = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  padding: 10px;
`;

const OrderTitle = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid #e5edef;
  margin-bottom: 20px;
`;

const OrderContent = styled.div`
  height: 200px;
  background-color: #fff;
  border: 1px solid #e5edef;
  border-radius: 8px;
  margin-bottom: 30px;
  overflow: hidden;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const OrderDetails = styled.div`
  width: 100%;
  height: 100%;
  vertical-align: top;
  display: inline-block;
  padding: 30px;
  position: relative;
`;

const Status = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 18px;
  border-radius: 0 8px;
  font-family: Poppins-SemiBold, Helvetica, Arial, sans-serif;
  text-align: center;
  cursor: pointer;
  ${({ type }) => status(type)}
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const OrderUl = styled.ul`
  display: flex;
  flex-direction: column;
`;
const OrderLi = styled.li`
  width: 50%;
  display: inline-block;
  vertical-align: top;
  zoom: 1;
  line-height: 1.7;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #7d7d7d;
`;

const OrderSpan = styled.span`
  min-width: 50px;
  padding-right: 5px;
  display: inline-block;
  color: #332927;
`;

export const MyOrders = ({ orders }) => {
  let { url } = useRouteMatch();

  return (
    <Container>
      <OrderHistory>
        <Wrapper>
          <OrderTitle>
            <h2>Mis últimos pedidos! </h2>
            <p>
              Haz seguimiento al detalle de tus pedidos anteriores y solicita
              ayuda si hay algún inconveniente con una de tus compras.
            </p>
          </OrderTitle>

          <div>
            {orders.map((order) => (
              <OrderContent>
                <OrderDetails>
                  <OrderUl>
                    <OrderLi>
                      <OrderSpan>Fecha:</OrderSpan>
                      {formatDate(new Date(order.createdAt.seconds))}
                    </OrderLi>
                    <OrderLi>
                      <OrderSpan>Total:</OrderSpan>
                      {formatPrice(order.total)}
                    </OrderLi>
                  </OrderUl>
                  <Flex>
                    <Link to={`${url}/${order.id}`}>
                      <CustomButton w="150px">Ver resumen</CustomButton>
                    </Link>
                  </Flex>
                  <Status type={order.status}>{order.status}</Status>
                </OrderDetails>
              </OrderContent>
            ))}
          </div>
        </Wrapper>
      </OrderHistory>
    </Container>
  );
};
