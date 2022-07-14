const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');
let counterValue = (counter.textContent = 0);

decrementBtn.addEventListener('click', () => {
  counter.innerHTML = counterValue -= 1;
});

incrementBtn.addEventListener('click', () => {
  counter.innerHTML = counterValue += 1;
});
