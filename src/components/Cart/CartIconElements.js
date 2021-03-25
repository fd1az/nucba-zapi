import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const CartIconStyled = styled(ShoppingCartIcon)`
  width: 45px;
  height: 45px;
`;

export const ItemCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.red};
  font-size: 10px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
