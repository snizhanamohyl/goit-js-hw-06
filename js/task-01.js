const listCategoriesEl = document.getElementById('categories');
const categoriesElems = Array.from(listCategoriesEl.children);

console.log('Number of categories: ', categoriesElems.length);

categoriesElems.forEach(function (category) {
  console.log('Category: ', category.firstElementChild.innerText);
  console.log('Elements: ', category.lastElementChild.children.length);
});
