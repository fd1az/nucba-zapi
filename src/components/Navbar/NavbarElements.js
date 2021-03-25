import styled from 'styled-components';
import { fixed, ContainerStyled } from '../../Styles/utilities';
import { Link } from 'react-router-dom';

export const NavbarStyled = styled.div`
  padding: 10px;
  ${fixed()}
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #e5edef;
  height: 75px;
  padding: 10px;
`;

export const ContainerNavbar = styled(ContainerStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100%;
  height: 100%;
`;

export const LinkStyled = styled(Link)`
  max-height: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  max-width: 200px;
  height: auto;
  max-height: 100%;
`;

export const UserContainer = styled.div`
  position: relative;
`;

export const User = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export const Divider = styled.div`
  display: inline-block;
  border-left: 1px solid #dfdddd;
  margin: 0 25px;
  height: 25px;
`;

export const LoginButton = styled.button`
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

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`;
