$('.gender').click(function () {
    $(this).find('.btn').toggleClass('active');
    if ($(this).find('.btn-primary').length > 0) {
        $(this).find('.btn').toggleClass('btn-primary');
    }
    $(this).find('.btn').toggleClass('btn-default');
});


const userName = document.getElementById('userName');
const email = document.getElementById('email');
const cell = document.getElementById('cell');
const cnic = document.getElementById('cnic');
const address = document.getElementById('address');

let validUserName = false;
let validEmail = false;
let validCell = false;
let validCnic = false;
let validAddress = false;

$('#success').hide();
$('#failure').hide();

userName.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]{3,20}$/;
    let str = userName.value;
    if (regex.test(str)) {
        userName.classList.remove('is-invalid');
        validUserName = true;
    }
    else {
        userName.classList.add('is-invalid');
        console.log('can not start');
        validUserName = false
    }
});

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        console.log('can not start');
        validEmail = false;
    }
});

cell.addEventListener('blur', () => {
    let regex = /^([0-9]){11}$/;
    let str = cell.value;
    if (regex.test(str)) {
        cell.classList.remove('is-invalid');
        validCell = true;
    }
    else {
        cell.classList.add('is-invalid');
        validCell = false;
    }

});

cnic.addEventListener('blur', () => {
    let regex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;
    let str = cnic.value;
    if (regex.test(str)) {
        cnic.classList.remove('is-invalid');
        validCnic=true;
    }
    else {
        cnic.classList.add('is-invalid');
        validCnic=false;
    }

});

address.addEventListener('blur', () => {
    let regex = /[A-Za-z0-9'\.\-\s\,]/;
    let str = address.value;
    if (regex.test(str)) {  
        address.classList.remove('is-invalid');
        validAddress = true;
    }
    else {
        address.classList.add('is-invalid');
        validAddress = false;
    }

});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(validUserName, validEmail, validCell)
    if (validUserName && validEmail && validCell &&validCnic &&validAddress) {
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
    }
    else {
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show')
        $('#success').hide();
        $('#failure').show();
    }
})