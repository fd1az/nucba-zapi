import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useCategories } from '../../hooks/useCategories';

import { formatPrice } from '../../utils';

import {
  MenuStyled,
  FoodGrid,
  Food,
  FoodLabel,
  TagsMenu,
  TagCard,
  TagImg,
  ContainerMenu,
  TitleStyled,
  SubtitleStyled,
  FoodImage,
  TagImgTodos,
} from './MenuElements';

// import imgTodos from '../../assets/nucbazappiintegral.png';

export const Menu = ({ setOpenFood }) => {
  //TODO: UTILIZAR LA RESPUESTA DE useCategories!!!
  const cates = useCategories();
  console.log(cates);
  const [section, setSection] = useState(null);
  let Foods = useSelector((state) => state.products.foods);
  const categories = useSelector(
    ({ categories: { categories } }) => categories
  ); // destructuracion 2 veces por Nico

  if (section) {
    Foods = { [section]: Foods[section] };
  }
  /**
   * Tener en cuenta que utilizamos el selector para traer info de categorias y productos, pero eso ahora es estado del servidor, se debe eliminar todo lo que este relacionado a estos items del store! y manejar todo con react-query
   */
  return (
    <MenuStyled>
      <ContainerMenu>
        <TitleStyled>Menu</TitleStyled>
        <TagsMenu>
          {section && (
            <TagCard onClick={() => setSection(null)}>
              <TagImgTodos />
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
              <SubtitleStyled>{sectionName}</SubtitleStyled>
              <FoodGrid>
                {foods.map((food) => (
                  <Food onClick={() => setOpenFood(food)}>
                    <FoodImage src={food.img} />
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
      </ContainerMenu>
    </MenuStyled>
  );
};
