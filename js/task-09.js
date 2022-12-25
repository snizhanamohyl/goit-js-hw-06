const bodyEl = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const colorValue = getRandomHexColor();
  colorValueEl.textContent = colorValue;
  bodyEl.style.backgroundColor = colorValue;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
