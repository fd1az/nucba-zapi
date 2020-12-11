export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(price);
};

export const foodItems = [
  {
    name: 'Pizza Tranca',
    img: 'img/pizza1.jpg',
    section: 'Pizzas',
    price: 100,
  },
  {
    name: 'Pizza Mix',
    img: 'img/pizza2.jpg',
    section: 'Pizzas',
    price: 100,
  },
  {
    name: 'Burger Zarpada',
    img: 'img/burger1.jpg',
    section: 'Burgers',
    price: 100,
  },
  {
    name: 'Burger en la pera',
    img: 'img/burger2.jpg',
    section: 'Burgers',
    price: 100,
  },
  {
    name: 'Sambuchito 1',
    img: 'img/sanbu1.jpg',
    section: 'Sambuchitos',
    price: 100,
  },
  {
    name: 'Sambuchito 2',
    img: 'img/sanbu2.jpg',
    section: 'Sambuchitos',
    price: 100,
  },
];

export const Foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section] = [...res[food.section], food];

  return res;
}, {});
