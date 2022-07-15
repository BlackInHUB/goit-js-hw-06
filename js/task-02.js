const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsList = document.querySelector('#ingredients');

const ingridientsItems = ingredients
  .map(ingredient => `<li class="item">${ingredient}</li>`)
  .join('');

ingredientsList.insertAdjacentHTML('afterbegin', ingridientsItems);
