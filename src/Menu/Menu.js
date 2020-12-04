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
      {Object.keys(Foods).map((sectionKey) => {
        return (
          <>
            <h3>{sectionKey}</h3>
            <FoodGrid>
              {Foods[sectionKey].map((food) => (
                <Food img={food.img}>{food.name}</Food>
              ))}
            </FoodGrid>
          </>
        );
      })}
    </MenuStyled>
  );
};
