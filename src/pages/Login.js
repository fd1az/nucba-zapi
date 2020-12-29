import React from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  LayoutPage,
  Input,
  FormContent,
  FormStyled,
  CustomButton,
} from '../components/UI';

import useForm from '../hooks/useForm';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../utils';
import GoogleLogo from '../assets/google_icon.svg';
import { auth, singInWithGoogle } from '../firebase/firebase.util';

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const GoogleButton = styled(CustomButton)`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(130deg, #ff9259 0%, #ff2426 70%);
`;

const GoogleIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const Login = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <LayoutPage>
      <Wrapper>
        <form onSubmit={submitHandler}>
          <FormStyled>
            <FormContent>
              <Input
                id="email"
                label="Email"
                type="email"
                onInput={inputHandler}
                validators={[VALIDATOR_EMAIL()]}
                errorText="Campo Obligatorio"
              />
              <Input
                id="password"
                label="Password"
                type="password"
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(8)]}
                errorText="Campo Obligatorio"
              />
            </FormContent>
            <ContainerButtons>
              <CustomButton>Ingresar</CustomButton>
              <GoogleButton onClick={singInWithGoogle}>
                <GoogleIcon src={GoogleLogo} />
                <p>Login con Google</p>
              </GoogleButton>
            </ContainerButtons>
          </FormStyled>
        </form>
      </Wrapper>
    </LayoutPage>
  );
};

export default Login;
