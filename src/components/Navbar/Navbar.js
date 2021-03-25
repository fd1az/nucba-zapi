import React from 'react';
import imgLogo from '../../assets/nucbazappiintegral.png';
import userIcon from '../../assets/user.svg';
import { CartIcon } from '../Cart/CartIcon';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserMenu } from '../UserMenu/UserMenus';
import * as userActions from '../../redux/user/user-actions';

import {
  NavbarStyled,
  Logo,
  NavigationMenu,
  Divider,
  User,
  LoginButton,
  ContainerNavbar,
  LinkStyled,
  UserContainer,
} from './NavbarElements';

export const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden());
  };

  return (
    <NavbarStyled>
      <ContainerNavbar>
        <LinkStyled to="/">
          <Logo src={imgLogo} />
        </LinkStyled>

        <NavigationMenu>
          <CartIcon />
          <Divider />
          {currentUser ? (
            <UserContainer>
              <User src={userIcon} onClick={handleToggle} />
              <UserMenu user={currentUser} />
            </UserContainer>
          ) : (
            <Link to="/login">
              <LoginButton>Ingresar</LoginButton>
            </Link>
          )}
        </NavigationMenu>
      </ContainerNavbar>
    </NavbarStyled>
  );
};
