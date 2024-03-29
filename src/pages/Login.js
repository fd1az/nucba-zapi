import React, { useState } from 'react';
import {
  Wrapper,
  LayoutPage,
  Input,
  FormContent,
  FormStyled,
  CustomButton,
} from '../components/UI';

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

import {
  ContainerButtons,
  GoogleButton,
  GoogleIcon,
  Alink,
} from './LoginElements';

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
