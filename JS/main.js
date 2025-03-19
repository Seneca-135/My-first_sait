function checkEmail() {
    let email = document.querySelector('#emailField').value;
    if (!email.includes('@')) alert('Нет символа @');
    else if (!email.includes('.')) alert('Нет символа .');
    else alert('Все отлично!');
}

const btn_burger = document.getElementById ('burger-btn');
// const nav = document.querySelector('nav');
const header = document.querySelector('header');

btn_burger.addEventListener('click', function(){
    header.classList.toggle('open');
})