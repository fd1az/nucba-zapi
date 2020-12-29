import React from 'react';
import styled from 'styled-components';
import imgLogo from '../../assets/nucbazappiintegral.png';
import userIcon from '../../assets/user.svg';
import { CartIcon } from '../Cart/CartIcon';
import { fixed } from '../../Styles/utilities';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

const NavbarStyled = styled.div`
  padding: 10px;
  ${fixed()}
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #e5edef;
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
`;

const User = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const Divider = styled.div`
  display: inline-block;
  border-left: 1px solid #dfdddd;
  margin: 0 25px;
  height: 25px;
`;

const LoginButton = styled.button`
  cursor: pointer;
  color: #ffffff;
  border-radius: 8px;
  padding: 10px 15px;
  border: none;
  margin: 0 5px;
  font-size: 14px;
  font-family: 'Poppins-SemiBold', Helvetica, Arial, sans-serif;
  background-image: linear-gradient(130deg, #ff9259 0%, #ff2426 70%);
`;

const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  align-self: flex-end;
  margin-right: 20px;
`;

export const Navbar = () => {
  return (
    <NavbarStyled>
      <Link to="/">
        <Logo src={imgLogo} />
      </Link>

      <NavigationMenu>
        <CartIcon />
        <Divider />
        <Link to="/login">
          <LoginButton>Ingresar</LoginButton>
        </Link>

        <User src={userIcon} onClick={() => auth.signOut()} />
      </NavigationMenu>
    </NavbarStyled>
  );
};
