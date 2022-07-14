function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const coloringBtn = document.querySelector('.change-color');

coloringBtn.addEventListener('click', function () {
  body.style.background = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
});
