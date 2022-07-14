const inputRange = document.querySelector('#font-size-control');
const targetText = document.querySelector('#text');

inputRange.addEventListener('input', event => {
  targetText.style.fontSize = `${event.currentTarget.value}px`;
});
