// variable for email
let email = 'sabahrazaq99@gmail.com';

// validation for email
function signIn() {
    let enterEmail = document.querySelector('#user_name').value;

    if (email === enterEmail) {
        return true;
    } else {
        document.querySelector('#error').innerText = "!Please Enter Valid Email";
    }
    return false;
}

// variable for password
let password = 'Sabah1234';

// validation for password
function pswSign() {
    let enterPassword = document.querySelector('#user_pass').value;

    if (password === enterPassword) {
        return true;
    } else {
        document.querySelector('#psw').innerText = "!Please Enter Valid Password";
    }
    return false;
}