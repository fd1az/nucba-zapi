import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 100%;
  max-width: 600px;
  z-index: 10;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const FormSectionStyled = styled.div`
  padding: 30px;
  border-radius: 15px 15px;
  background-color: #fff;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  width: 100%;

  @media screen and (max-width: 600px) {
    padding: 30px;
  }
`;

export const FormTitle = styled.p`
  color: black;
  text-align: center;
`;
