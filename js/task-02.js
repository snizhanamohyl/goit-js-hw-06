const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const makeIngredientsListItem = ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;
  return listItem;
};

const ingredientsListItems = ingredients.map(makeIngredientsListItem);

document.getElementById('ingredients').append(...ingredientsListItems);
