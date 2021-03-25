import React from 'react';
import { formatPrice } from '../../utils';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';

import {
  DialogShadow,
  Dialog,
  DialogBanner,
  DialogBannerName,
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from './FoodDialogElements';

const FoodDialogContainer = ({ openFood, setOpenFood }) => {
  const dispatch = useDispatch();

  const handlerClose = (e) => {
    if (e.target.id === 'food__dialog') {
      setOpenFood();
    }
  };

  const addToOrder = () => {
    dispatch(cartActions.addItem(openFood));
    setOpenFood();
  };

  return (
    <>
      <DialogShadow id="food__dialog" onClick={(e) => handlerClose(e)}>
        <Dialog>
          <DialogBanner img={openFood.img}>
            <DialogBannerName>{openFood.name}</DialogBannerName>
          </DialogBanner>
          <DialogContent>
            <p>{openFood.description}</p>
          </DialogContent>
          <DialogFooter>
            <ConfirmButton onClick={addToOrder}>
              Agregar: {formatPrice(openFood.price)}
            </ConfirmButton>
          </DialogFooter>
        </Dialog>
      </DialogShadow>
    </>
  );
};

export const FoodDialog = (props) => {
  if (!props.openFood) return null;

  return <FoodDialogContainer {...props} />;
};
