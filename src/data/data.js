export const foodItems = [
  {
    name: 'Pizza Tranca',
    img: 'img/pizza1.jpg',
    section: 'Pizzas',
  },
  {
    name: 'Pizza Mix',
    img: 'img/pizza2.jpg',
    section: 'Pizzas',
  },
  {
    name: 'Burger Zarpada',
    img: 'img/burger1.jpg',
    section: 'Burgers',
  },
  {
    name: 'Burger en la pera',
    img: 'img/burger2.jpg',
    section: 'Burgers',
  },
  {
    name: 'Sambuchito 1',
    img: 'img/sanbu1.jpg',
    section: 'Sambuchitos',
  },
  {
    name: 'Sambuchito 2',
    img: 'img/sanbu2.jpg',
    section: 'Sambuchitos',
  },
];

export const Foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section] = [...res[food.section], food];

  return res;
}, {});
