import { Input, FormStyled, FormContent } from '../UI';
import useForm from '../../hooks/useForm';
import { VALIDATOR_REQUIRE } from '../../utils';
import { CardSummary } from '../CardSummary/CardSummary';
import { useSelector, useDispatch } from 'react-redux';
import { CONSTO_ENVIO } from '../../utils';
import { useHistory } from 'react-router-dom';
import { Spinner } from '../UI/Spinner';
import * as orderActions from '../../redux/orders/order.actions';
import * as cartActions from '../../redux/cart/cart-actions';

export const CheckoutForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { cartItems } = useSelector((state) => state.cart);
  const { purchased, loading } = useSelector((state) => state.orders);
  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const dispatch = useDispatch();
  const history = useHistory();

  const [formState, inputHandler] = useForm(
    {
      domicilio: {
        value: '',
        isValid: false,
      },
      localidad: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!formState.isValid) {
      console.log('Completar todo los dato PANCHOOOOO!!');
      return;
    }
    const orderData = {
      userId: currentUser.id,
      shippingDetails: {
        domicilio: formState.inputs.domicilio.value,
        localidad: formState.inputs.localidad.value,
      },
      items: [...cartItems],
      shippingPrice: CONSTO_ENVIO,
      subtotal: subTotal,
      total: CONSTO_ENVIO + subTotal,
    };
    dispatch(orderActions.createOrder(orderData));
    dispatch(cartActions.clearCart());

    console.log('YEAAAA mandale no ma!');
  };

  if (purchased) {
    dispatch(orderActions.purchaseInit());
    history.push('/mis-ordenes');
  }

  return (
    <form onSubmit={handlerSubmit}>
      <FormStyled>
        <FormContent>
          <Input
            id="domicilio"
            label="Domicilio"
            type="text"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Campo Obligatorio"
          />

          <Input
            id="localidad"
            label="Localidad"
            type="text"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Campo Obligatorio"
          />
        </FormContent>
      </FormStyled>
      <CardSummary
        isValid={!formState.isValid}
        subTotal={subTotal}
        envio={CONSTO_ENVIO}
      />
      {loading && <Spinner />}
    </form>
  );
};
