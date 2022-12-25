const nameInputEl = document.getElementById('name-input');
const nameOutputEl = document.getElementById('name-output');
const DEFAULT_NAME = 'Anonymous';

nameInputEl.addEventListener('input', onInputChange);

function onInputChange() {
  nameInputEl.value
    ? (nameOutputEl.innerText = nameInputEl.value)
    : (nameOutputEl.innerText = DEFAULT_NAME);
}
