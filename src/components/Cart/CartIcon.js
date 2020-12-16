import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';
import { nucbazapiRed } from '../../Styles/colors';

import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';

const CartIconStyled = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

export const CartIcon = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  );

  const hadlerToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <CartIconStyled onClick={hadlerToggle}>
      <ShoppingIcon
        style={{ width: '24px', height: '24px', color: nucbazapiRed }}
      />
      <ItemCount>{quantity}</ItemCount>
    </CartIconStyled>
  );
};
