let counterValue = 0;

const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const valueEl = document.getElementById('value');

const reduceValue = () => {
  counterValue = parseInt(valueEl.textContent);
  counterValue -= 1;
  valueEl.innerText = counterValue;
};

const increaseValue = () => {
  counterValue = parseInt(valueEl.textContent);
  counterValue += 1;
  valueEl.innerText = counterValue;
};

btnMinus.addEventListener('click', reduceValue);
btnPlus.addEventListener('click', increaseValue);
