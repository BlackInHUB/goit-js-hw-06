const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(function (el) {
  const listItem = document.createElement('li');
  listItem.textContent = el;
  listItem.classList.add('item');

  ingredientsList.append(listItem);
});
