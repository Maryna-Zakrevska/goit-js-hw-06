const formRef = document.querySelector('form');

const formSubmit = (event) => {event.preventDefault(); 
    if (event.currentTarget.email.value === "" || event.currentTarget.password.value === "") 
    {window.alert("Будьте добры, заполните все поля формы")}; 
    const {elements: { email, password }} = event.currentTarget;
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset(); 
}

formRef.addEventListener("submit", formSubmit);