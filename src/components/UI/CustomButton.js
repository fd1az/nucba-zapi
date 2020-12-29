import styled, { css } from 'styled-components';
import { nucbazapiRed } from '../../Styles/utilities';

export const CustomButton = styled.button`
  font-family: 'Montserrat', cursive;
  font-weight: 700;
  z-index: 999;
  border: none;
  margin: ${({ m }) => (m ? `${m}` : '10px')};
  color: white;
  height: 20px;
  border-radius: 8px;
  padding: 20px;
  width: ${({ w }) => (w ? `${w}` : '200px')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${nucbazapiRed};
  ${({ disabled }) =>
    disabled &&
    css`
      background: #ccc !important;
      color: #fff;
      border: 1px rgb(184, 182, 182) solid;
      cursor: not-allowed !important;
      transition: 0.5s ease-out;
    `}
`;
