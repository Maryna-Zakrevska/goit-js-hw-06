const inputRef = document.querySelector('input');
const checkStringLength = (event) => {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length))
    {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid")
    } else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid")
    }
};
inputRef.addEventListener("blur", checkStringLength);
