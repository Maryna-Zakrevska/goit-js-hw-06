const spanRef = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');
const callback = (event) => { spanRef.style.fontSize = inputRef.value + "px"};
inputRef.addEventListener("input", callback);