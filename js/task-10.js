function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const amountInput = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const bigBox = document.querySelector('#boxes');

function createBoxes() {
  for (let i = 0; i < amountInput.value; i += 1) {
    const littleBox = document.createElement('div');
    const littleBoxSize = 30 + i * 10;

    littleBox.style.backgroundColor = getRandomHexColor();
    littleBox.style.width = `${littleBoxSize}px`;
    littleBox.style.height = `${littleBoxSize}px`;
    bigBox.append(littleBox);
  }
}

createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', function () {
  bigBox.innerHTML = '';
  amountInput.value = '';
});
