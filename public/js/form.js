let formBtn = document.querySelector(".submit-btn");
let loader = document.querySelector(".loader");

formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let fullname = document.querySelector('#fullname');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let number = document.querySelector('#number');
    let tac = document.querySelector('#tc');

    // form validation
    if (fullname.value.length < 3) {
        alert('Name must be 3 letters long');
    }
    else if (!email.value.length) {
        alert('Enter your email');
    }
    else if (password.value.length < 8) {
        alert('Password must be greater than 8 characters');
    }
    else if (isNaN(number.value) || number.value.length < 11) {
        alert('Invalid number! Please enter a valid number');
    }
    else if (!tac.checked) {
        alert('Must agree to our terms and conditions');
    }
    else {
        // Submit form
        loader.style.display = 'block';

        sendData('/signup', {
            name: fullname.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked
        });
    }
});