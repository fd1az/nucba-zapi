import React from 'react';
import { Title } from '../../Styles/title';
import styled from 'styled-components';
import { nucbazapiRed } from '../../Styles/colors';
import { formatPrice } from '../../data/data';
import RemoveIcon from '../../assets/delete-full.svg';
import * as cartActions from '../../redux/cart/cart-actions';
import { useDispatch } from 'react-redux';

const QuantityManageStyled = styled(Title)`
  min-width: 100px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  height: 24px;
  align-items: center;
  border-radius: 8px;
  margin: 5px;
  height: 32px;
  padding: 10px;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
`;

const QuantityStyled = styled.span`
  font-size: 14px;
  width: 24px;
  text-align: center;
`;

const QuantityButton = styled.div`
  width: 23px;
  color: ${nucbazapiRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  &:hover {
    background-color: #ffe3e3;
  }
`;

const RemoveIconStyled = styled.img`
  width: 23px;
  height: auto;
  padding: 10px;
  cursor: pointer;
`;

export const QuantityManage = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <QuantityManageStyled>
      {+item.quantity === 1 ? (
        <RemoveIconStyled
          src={RemoveIcon}
          onClick={() => dispatch(cartActions.removeItem(item))}
        />
      ) : (
        <QuantityButton onClick={() => dispatch(cartActions.removeItem(item))}>
          -
        </QuantityButton>
      )}
      <QuantityStyled>{item.quantity}</QuantityStyled>

      <QuantityButton onClick={() => dispatch(cartActions.addItem(item))}>
        +
      </QuantityButton>
    </QuantityManageStyled>
  );
};
