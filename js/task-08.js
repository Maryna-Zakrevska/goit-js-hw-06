const formRef = document.querySelector('form');
const inputsRef = formRef.querySelectorAll('input');

inputsRef.forEach((input) => { input.setAttribute("required", true) });

const formSubmit = (event) => {event.preventDefault(); const {
    elements: { email, password }
} = event.currentTarget;
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
}

formRef.addEventListener("submit", formSubmit);