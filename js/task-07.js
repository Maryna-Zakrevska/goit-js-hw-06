const spanRef = document.querySelector('#text');
const inputRef = document.querySelector('#font-size-control');
const changeFontSize = (event) => { spanRef.style.fontSize = inputRef.value + "px"};
inputRef.addEventListener("input", changeFontSize);