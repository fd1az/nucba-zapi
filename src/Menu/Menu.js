import React from 'react';
import styled from 'styled-components';

import { Foods } from '../data/data';
import { FoodGrid, Food } from './FoodGrid';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
  z-index: 3;
`;

export const Menu = () => {
  console.log(Foods);
  return (
    <MenuStyled>
      {Object.entries(Foods).map(([sectionName, foods]) => {
        return (
          <>
            <h3>{sectionName}</h3>
            <FoodGrid>
              {foods.map((food) => (
                <Food img={food.img}>{food.name}</Food>
              ))}
            </FoodGrid>
          </>
        );
      })}
    </MenuStyled>
  );
};
