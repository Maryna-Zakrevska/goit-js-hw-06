const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const inputName = () => { spanRef.textContent = (inputRef.value === "" ? "Anonymous" : inputRef.value) };

inputRef.addEventListener("input", inputName);