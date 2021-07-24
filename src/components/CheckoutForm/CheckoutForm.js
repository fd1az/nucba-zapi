import { Input } from '../UI';
import useForm from '../../hooks/useForm';
import { VALIDATOR_REQUIRE } from '../../utils';
import { CardSummary } from '../CardSummary/CardSummary';
import { useSelector, useDispatch } from 'react-redux';
import { CONSTO_ENVIO } from '../../utils';
import { useHistory } from 'react-router-dom';
import { Spinner } from '../UI/Spinner';
import * as orderActions from '../../redux/orders/order.actions';
import * as cartActions from '../../redux/cart/cart-actions';

import {
  FormStyled,
  FormSectionStyled,
  FormTitle,
} from './CheckoutFormElements';

export const CheckoutForm = () => {
  //TODO: no usar el Selector, utilizar el hook useAuth() que creamos en el AuthContext
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

  //TODO: Utilizar reac-query mutation para realizar el POST a la api de node
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
    //Esto es ESTADO del servidor, aca deberimos usar la mutation
    dispatch(orderActions.createOrder(orderData));
    //Este se mantiene porque es estado del cliente!!!!!!!
    dispatch(cartActions.clearCart());

    console.log('YEAAAA mandale no ma!');
  };

  if (purchased) {
    //ESTADO DEL SERVIDOR!!!!!!
    dispatch(orderActions.purchaseInit());

    //ESTO NO VA MAS!!!
    /**
     * Tener en cuenta que la respuesta de la mutation va ser un objeto que contiene el orderId y el init-point a mercadopago, con esa info deberiamos crear un boton con el init-point, del redirect se encarga la respues de mercadopago
     * MODIFICAR EL FLOW!!!!!!!!!!!!!
     * Deberiamos realizar un paso mas, al momento de confirmar la data de envio, en ese punto se debe enviar la info al back, luego con la respuesta generar el boton de pago.
     */
    history.push('/mis-ordenes');
  }

  return (
    <FormStyled onSubmit={handlerSubmit}>
      <FormSectionStyled>
        {!formState.isValid && (
          <FormTitle>
            Por favor, completá los datos para poder continuar
          </FormTitle>
        )}
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
      </FormSectionStyled>

      {formState.isValid && (
        <CardSummary
          isValid={!formState.isValid}
          subTotal={subTotal}
          envio={CONSTO_ENVIO}
        />
      )}
    </FormStyled>
  );
};
