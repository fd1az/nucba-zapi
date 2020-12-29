import React, { useState } from 'react';
import styled from 'styled-components';

import { formatPrice } from '../../utils';
import { FoodGrid, Food, FoodLabel } from './FoodGrid';

import { useSelector } from 'react-redux';
import { TagsMenu, TagCard, TagImg } from './TagsMenu';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 20px 50px 20px;
  z-index: 3;
`;

export const Menu = ({ setOpenFood }) => {
  const [section, setSection] = useState(null);
  let Foods = useSelector((state) => state.products.foods);
  const categories = useSelector(
    ({ categories: { categories } }) => categories
  ); // destructuracion 2 veces por Nico

  if (section) {
    Foods = { [section]: Foods[section] };
  }

  return (
    <MenuStyled>
      <h2>Menu</h2>
      <TagsMenu>
        {section && (
          <TagCard onClick={() => setSection(null)}>
            <p>Todos</p>
          </TagCard>
        )}
        {categories.map((category) => (
          <TagCard
            onClick={() => setSection(category.section)}
            selected={category.section === section}
          >
            <TagImg img={category.imgTag} />
            <p>{category.section}</p>
          </TagCard>
        ))}
      </TagsMenu>
      {Object.entries(Foods).map(([sectionName, foods]) => {
        return (
          <>
            <h3>{sectionName}</h3>
            <FoodGrid>
              {foods.map((food) => (
                <Food img={food.img} onClick={() => setOpenFood(food)}>
                  <FoodLabel>
                    <div>{food.name}</div>
                    <div>{formatPrice(food.price)}</div>
                  </FoodLabel>
                </Food>
              ))}
            </FoodGrid>
          </>
        );
      })}
    </MenuStyled>
  );
};
