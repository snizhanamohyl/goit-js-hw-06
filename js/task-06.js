const inputEl = document.getElementById('validation-input');
const inputLength = parseInt(inputEl.dataset.length);
const VALID_CSS_CLASS = 'valid';
const INVALID_CSS_CLASS = 'invalid';

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
  if (inputEl.value.split('').length === inputLength) {
    inputEl.classList.add(VALID_CSS_CLASS);
    inputEl.classList.remove(INVALID_CSS_CLASS);
  } else {
    inputEl.classList.add(INVALID_CSS_CLASS);
    inputEl.classList.remove(VALID_CSS_CLASS);
  }
}
