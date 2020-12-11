import styled from 'styled-components';
import { Title } from '../Styles/title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
  font-size: 15px;
`;

export const Food = styled.div`
  height: 100px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  padding: 10px;
  font-size: 25px;
  margin-top: 5px;
  color: #000;
  border-radius: 7px;
  transition-property: box-shadow margin-top;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    margin-top: 0px;
  }
`;
