let counterValue = 0;
const spanRef = document.querySelector('span');
spanRef.textContent = counterValue;
const decrementButtonRef = document.querySelector('button[data-action="decrement"]');
const minusButtonClick = (event) => { spanRef.textContent = counterValue -= 1 };
decrementButtonRef.addEventListener("click", minusButtonClick);
const incrementButtonRef = document.querySelector('button[data-action="increment"]');
const plusButtonClick = (event) => { spanRef.textContent = counterValue += 1 };
incrementButtonRef.addEventListener("click", plusButtonClick);


