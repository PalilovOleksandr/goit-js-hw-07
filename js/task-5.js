function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

const button = document.querySelector('.change-color');
button.addEventListener('click', changeColor);
const output = document.querySelector('.color');
const body = document.querySelector('body');

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  output.textContent = getRandomHexColor();
}
