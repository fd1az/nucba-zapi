import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { status } from '../../Styles/utilities';

export const Container = styled.div`
  width: 70%;
  z-index: 10;
  padding: 20px 0;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const OrderHistory = styled.div`
  width: 100%;
  /* En dark mode sería así background-color: #0000003d; */
  /* En dark mode seria así color: white; */
  background-color: #fafafa;
  color: black;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  padding: 20px;

  @media screen and (max-width: 650px) {
    padding: 0;
  }
`;

export const TitleContainerStyled = styled.div`
  width: 100%;
  @media screen and (max-width: 650px) {
    grid-area: resumen;
  }
`;

export const StatusContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @media screen and (max-width: 650px) {
    grid-area: status;
  }
`;

export const Status = styled.div`
  padding: 8px 18px;
  border-radius: 0 8px;
  font-family: Poppins-SemiBold, Helvetica, Arial, sans-serif;
  text-align: center;
  ${({ type }) => status(type)}
  width: 100%;
`;

export const HeaderResume = styled.div`
  display: flex;
  border-bottom: 1px solid #e5edef;
  padding: 20px 0;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 650px) {
    display: grid;
    grid-template-areas: 'volver resumen' 'status status';
    gap: 10px;
  }
`;

export const VolverButtonStyled = styled(Link)`
  @media screen and (max-width: 650px) {
    grid-area: volver;
  }
`;

export const ProductResume = styled.div`
  padding: 20px 10px;

  h3 {
    margin-bottom: 10px;
  }
`;

export const ProductUl = styled.ul`
  padding: 0px;
  list-style: none;
`;
export const ProductLi = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ItemImg = styled.div`
  width: 60px;
  height: 60px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 50%;
`;
export const InfoProducts = styled.div`
  width: 100%;
  padding: 0 15px;
`;

export const PriceResume = styled.div`
  text-align: right;
  padding: 10px;
`;

export const Quantity = styled.span`
  display: block;
  color: #7d7d7d;
`;

export const CostResume = styled.div`
  border-top: 1px solid #e5edef;
  padding: 20px 10px;
`;

export const CostLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;
