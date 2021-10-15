const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');
const makeMarkup = [];

ingredients.forEach(liList => {
  const liIngredient = document.createElement('li');
  liIngredient.textContent = liList;
  liIngredient.classList.add('item');
  makeMarkup.push(liIngredient);
});

list.append(...makeMarkup);

