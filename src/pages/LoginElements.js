import styled from 'styled-components';
import { nucbazapiRed } from '../Styles/utilities';
import { CustomButton } from '../components/UI';

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const GoogleButton = styled(CustomButton)`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(130deg, #ff9259 0%, #ff2426 70%);
`;

export const GoogleIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Alink = styled.a`
  color: ${nucbazapiRed};
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
