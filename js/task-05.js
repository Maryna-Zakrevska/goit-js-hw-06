const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const callback = () => { spanRef.textContent = (inputRef.value === "" ? "Anonymous" : inputRef.value) };

inputRef.addEventListener("input", callback);