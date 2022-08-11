let switchButton =document.querySelector('.switch-button');
let basic = document.querySelector('#basic');
let professional = document.querySelector('#professional');
let master = document.querySelector('#master');

switchButton.addEventListener('click', () => {
    switchButton.classList.toggle('selected');
    if (basic.textContent=="19.99") {
        basic.innerHTML="199.99"
    }
    else {
        basic.innerHTML="19.99"
    }
    if (professional.textContent=="24.99") {
        professional.innerHTML="249.99"
    }
    else {
        professional.innerHTML="24.99"
    }
    if (master.textContent=="39.99") {
        master.innerHTML="399.99"
    }
    else {
        master.innerHTML="39.99"
    }
    
})
