const spanRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBackgroundColor = (event) => {
  spanRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = getRandomHexColor();
}

buttonRef.addEventListener("click", changeBackgroundColor);
