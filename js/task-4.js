const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const mail = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();
    if(mail === '' || password === '') {
        alert('All form fields must be filled in')
        return
    }
    const data = {mail, 
    password
    } 
    console.log(data);
    form.reset();
})
