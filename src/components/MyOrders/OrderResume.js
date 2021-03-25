import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CustomButton } from '../UI';

import {
  HeaderResume,
  ProductResume,
  ProductUl,
  ProductLi,
  ItemImg,
  InfoProducts,
  PriceResume,
  Quantity,
  CostResume,
  CostLi,
  OrderHistory,
  Container,
  TitleContainerStyled,
  VolverButtonStyled,
  StatusContainerStyled,
  Status,
} from './OrderResumeElements';

export const OrderResume = () => {
  let { orderId } = useParams();
  let { orders } = useSelector((state) => state.orders);

  let [order] = orders.filter((order) => order.id === orderId);

  console.log(order);

  return (
    <Container>
      <OrderHistory>
        <HeaderResume>
          <VolverButtonStyled to="/mis-ordenes">
            <CustomButton w="60px">Volver</CustomButton>
          </VolverButtonStyled>
          <TitleContainerStyled>
            <h3>Resumen</h3>
            <p>Orden: {orderId}</p>
          </TitleContainerStyled>
          <StatusContainerStyled>
            <Status type={order.status}>{order.status}</Status>
          </StatusContainerStyled>
        </HeaderResume>
        <ProductResume>
          <h3>Productos</h3>
          <ProductUl>
            {order.items.map((item) => (
              <ProductLi>
                <ItemImg img={item.img} />
                <InfoProducts>
                  <p>
                    {item.name} - {item.description}
                  </p>
                </InfoProducts>

                <PriceResume>
                  <Quantity>{item.quantity}U</Quantity>
                  <strong>${item.price}</strong>
                </PriceResume>
              </ProductLi>
            ))}
          </ProductUl>
        </ProductResume>
        <CostResume>
          <h3>Costos</h3>
          <ProductUl>
            <CostLi>
              <span>Costo de los productos </span>

              <span>${order.subtotal}</span>
            </CostLi>
            <CostLi>
              <span>Costo de envío </span>

              <span>${order.shippingPrice}</span>
            </CostLi>
            <CostLi>
              <span>
                <strong>Total</strong>
              </span>

              <span>
                <strong>${order.total}</strong>
              </span>
            </CostLi>
          </ProductUl>
        </CostResume>
      </OrderHistory>
    </Container>
  );
};
