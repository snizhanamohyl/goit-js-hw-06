const inputEl = document.querySelector('#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesWrapEl = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  let boxWidth = 30;
  let boxHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = boxWidth + 'px';
    box.style.height = boxHeight + 'px';

    boxWidth += 10;
    boxHeight += 10;

    boxes.push(box);
  }

  boxesWrapEl.append(...boxes);
}

function destroyBoxes() {
  boxesWrapEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
