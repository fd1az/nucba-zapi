import { Input, FormStyled, FormContent } from '../UI';
import useForm from '../../hooks/useForm';
import { VALIDATOR_REQUIRE } from '../../utils';
import { CardSummary } from '../CardSummary/CardSummary';

export const ShippingForm = () => {
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
    console.log('YEAAAA mandale no ma!');
  };

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
      <CardSummary isValid={!formState.isValid} />
    </form>
  );
};
