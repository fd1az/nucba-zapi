import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  LayoutPage,
  Input,
  FormContent,
  FormStyled,
  CustomButton,
} from '../components/UI';

import { nucbazapiRed } from '../Styles/utilities';

import useForm from '../hooks/useForm';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../utils';
import GoogleLogo from '../assets/google_icon.svg';
import {
  auth,
  singInWithGoogle,
  createUserProfileDocument,
} from '../firebase/firebase.util';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
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

const Alink = styled.a`
  color: ${nucbazapiRed};
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
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

  if (currentUser) {
    history.goBack();
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
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
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          displayName: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      try {
        await auth.signInWithEmailAndPassword(
          formState.inputs.email.value,
          formState.inputs.password.value
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          formState.inputs.email.value,
          formState.inputs.password.value
        );

        await createUserProfileDocument(user, {
          displayName: formState.inputs.displayName.value,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(formState.inputs);
  return (
    <LayoutPage>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <FormStyled>
            <FormContent>
              {!isLoginMode && (
                <Input
                  id="displayName"
                  label="Nombre"
                  type="text"
                  onInput={inputHandler}
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText="Campo Obligatorio"
                />
              )}

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
              <CustomButton>
                {isLoginMode ? 'Ingresar' : 'Registrarme'}
              </CustomButton>
              <GoogleButton onClick={singInWithGoogle}>
                <GoogleIcon src={GoogleLogo} />
                <p>Login con Google</p>
              </GoogleButton>
            </ContainerButtons>
            <ContainerButtons>
              <span>
                {isLoginMode
                  ? 'Ya tenés una cuenta? '
                  : 'Todavía no tenés una cuenta?'}
              </span>
              <Alink onClick={switchModeHandler}>
                {!isLoginMode ? ' Ingresar' : ' Registrate'}
              </Alink>
            </ContainerButtons>
          </FormStyled>
        </form>
      </Wrapper>
    </LayoutPage>
  );
};

export default Login;
