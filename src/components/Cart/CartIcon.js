import React from 'react';

import {
  CartIconContainer,
  ItemCount,
  CartIconStyled,
} from './CartIconElements';

import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';

export const CartIcon = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  );

  const handlerToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <CartIconContainer onClick={handlerToggle}>
      <CartIconStyled></CartIconStyled>
      {quantity !== 0 && <ItemCount>{quantity}</ItemCount>}
    </CartIconContainer>
  );
};
