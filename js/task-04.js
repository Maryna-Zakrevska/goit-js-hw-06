const spanRef = document.querySelector('span');
const decrementButtonRef = document.querySelector('button[data-action="decrement"]');
const incrementButtonRef = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
spanRef.textContent = counterValue;

const minusButtonClick = (event) => { spanRef.textContent = counterValue -= 1 };
const plusButtonClick = (event) => { spanRef.textContent = counterValue += 1 };


decrementButtonRef.addEventListener("click", minusButtonClick);
incrementButtonRef.addEventListener("click", plusButtonClick);


