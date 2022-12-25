const listCategoriesEl = document.getElementById('categories');
const categoriesElems = listCategoriesEl.children;

console.log('Number of categories: ', categoriesElems.length);

const categories = Array.from(categoriesElems);

// перебираючий метод масиву map
const categoryAnalyzer = categories.map(category => {
  console.log('Category: ', category.querySelector('.item>h2').innerText);
  console.log('Elements: ', category.querySelector('.item>ul').children.length);
});

// перебираючий метод масиву reduce
// const categoryAnalyzer = categories.reduce((prev, category) => {
//   console.log('Category: ', category.querySelector('.item>h2').innerText);
//   console.log('Elements: ', category.querySelector('.item>ul').children.length);
// }, 0);

// використовуючи цикл for
// for (let i = 0; i < categoriesElems.length; i += 1) {
//   console.log('Category: ', categoriesElems[i].querySelector('.item>h2').innerText);
//   console.log('Elements: ', categoriesElems[i].querySelector('.item>ul').children.length);
// }
