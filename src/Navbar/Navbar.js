import React from 'react';
import styled from 'styled-components';
import imgLogo from '../assets/nucbazappiintegral.png';

const NavbarStyled = styled.div`
  padding: 10px;
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 999;
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
`;

export const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo src={imgLogo} />
    </NavbarStyled>
  );
};
