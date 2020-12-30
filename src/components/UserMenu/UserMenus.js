import styled from 'styled-components';

import * as userActions from '../../redux/user/user-actions';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
import { Link } from 'react-router-dom';

const UserMenuStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 100px;
  z-index: 12;
  opacity: 1;
  border: 1px solid #c7c7c7;
  visibility: visible;
  right: 15px;
  min-width: 250px;
  border-radius: 8px;
  background: #ffffff;
`;

const WelcomeTitle = styled.div`
  border-bottom: 1px solid #e5edef;
  width: 100%;
  padding-bottom: 5px;
  padding: 15px 20px;
`;

const MenuOptions = styled.div`
  width: 100%;
`;

const MenuOptionElement = styled.div`
  transition: all 0.3s linear;
  padding: 15px 20px;
  color: #7d7d7d;
  font-size: 14px;
  font-family: 'Poppins-Regular', Helvetica, Arial, sans-serif;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 68, 31, 0.04);
    color: #ff441f;
  }
`;

const Shadow = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  background: rgba(0, 0, 0, 0.5);
`;

export const UserMenu = ({ user }) => {
  const { hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden());
  };
  return (
    <>
      {!hiddenMenu && <Shadow onClick={handleToggle} />}
      {!hiddenMenu ? (
        <UserMenuStyled>
          <WelcomeTitle>Hola {user.displayName}</WelcomeTitle>
          <MenuOptions>
            <Link to="/mis-ordenes" onClick={handleToggle}>
              <MenuOptionElement>Mís Ordenes</MenuOptionElement>
            </Link>

            <MenuOptionElement onClick={() => auth.signOut()}>
              Cerrar Sesíon
            </MenuOptionElement>
          </MenuOptions>
        </UserMenuStyled>
      ) : null}
    </>
  );
};
