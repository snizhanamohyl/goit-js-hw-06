const inputEl = document.getElementById('font-size-control');
const outputEL = document.getElementById('text');

inputEl.addEventListener('input', () => {
  outputEL.style.fontSize = inputEl.value + 'px';
});
