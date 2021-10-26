const inputRef = document.querySelector('input');
const divRef = document.querySelector('#boxes');
const createButtonRef = document.querySelector('button[data-create]');
const destroyButtonRef = document.querySelector('button[data-destroy]');



const createBoxes = (amount) => {
  const boxesArray = [];
  boxesArray.length = amount;
  boxesArray.fill(1, 0);
  const boxes = boxesArray.map((item, index, array) => {
    const boxWidth = `${30 + 10 * index}px`;
    const boxHeight = `${30 + 10 * index}px`;
    const box = document.createElement('div');
    box.style.width = boxWidth;
    box.style.height = boxHeight;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });
  divRef.append(...boxes)
};

createBoxes(inputRef.value);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonClick = () => { createBoxes(inputRef.value);};
const destroyButtonClick = () => { divRef.innerHTML = ""; 
inputRef.value = 0;};



createButtonRef.addEventListener('click', createButtonClick);
destroyButtonRef.addEventListener('click', destroyButtonClick);