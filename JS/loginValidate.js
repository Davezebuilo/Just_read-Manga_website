const emailValidate = document.getElementById('invalid-email');
const passwordValidate = document.getElementById('incorrect-password');
const loginForm = document.getElementById('login-form');
const email = document.getElementById('email-login');
const password = document.getElementById('password-login');

loginForm.addEventListener('submit', (e)=>{
    let messages = [];
    if (email.value === '' || email.value === null){
        messages.push('Email cannot be empty')
        emailValidate.style.display = 'block';
        email.style.outline = '1px solid #FF5247';
        email.style.color = '#FF5247';

        email.addEventListener('click', ()=>{
            emailValidate.style.display = 'none';
            email.style.outline = '1px solid #1897BF';
            email.style.color = '#101010';
        })
    }

    if (password.value === '' || password.value === null){
        messages.push('Password cannot be empty')
        passwordValidate.style.display = 'block';
        password.style.outline = '1px solid #FF5247';
        password.style.color = '#FF5247';

        password.addEventListener('click', ()=>{
            passwordValidate.style.display = 'none';
            password.style.outline = '1px solid #1897BF';
            password.style.color = '#101010';
        })
    }

    if (password.value === 'password' || password.value === 'Password' || password.value === 'PASSWORD'){
        messages.push('Password cannot be Password, password or PASSWORD')
        passwordValidate.style.display = 'block';
        password.style.outline = '1px solid #FF5247';
        password.style.color = '#FF5247';

        password.addEventListener('click', ()=>{
            passwordValidate.style.display = 'none';
            password.style.outline = '1px solid #1897BF';
            password.style.color = '#101010';
        })
    }

    if (messages.length  > 0){
        e.preventDefault();
        emailValidate.innerText = messages[0];
    }
    if (messages.length  > 0){
        e.preventDefault();
        passwordValidate.innerText = messages[0];
    }
})