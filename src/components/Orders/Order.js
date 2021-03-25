import React from 'react';
import {
  DialogFooter,
  ConfirmButton,
  DialogShadow,
} from '../FoodDialog/FoodDialogElements';
import { formatPrice } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import { QuantityManage } from './QuantityManage';
import * as cartActions from '../../redux/cart/cart-actions';
import { Link } from 'react-router-dom';

import {
  OrderStyled,
  OrderContent,
  OrderContainer,
  OrderItem,
  ItemImg,
} from './OrderElements';

export const Order = () => {
  const hidden = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const hadlerToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <>
      {hidden && <DialogShadow onClick={hadlerToggle} />}
      <OrderStyled show={hidden}>
        {cartItems?.length === 0 ? (
          <OrderContent>Nada por aquí</OrderContent>
        ) : (
          <OrderContent>
            <OrderContainer>Tu pedido:</OrderContainer>

            {cartItems.map((item) => (
              <OrderContainer>
                <OrderItem>
                  <ItemImg img={item.img} />
                  <div>
                    <div>{item.name}</div>
                    {formatPrice(item.price * item.quantity)}
                  </div>

                  <div>
                    <QuantityManage item={item} />
                  </div>
                </OrderItem>
              </OrderContainer>
            ))}
          </OrderContent>
        )}
        <DialogFooter>
          <Link to="/checkout" onClick={hadlerToggle}>
            <ConfirmButton>Ir a pagar {formatPrice(total)}</ConfirmButton>
          </Link>
        </DialogFooter>
      </OrderStyled>
    </>
  );
};
