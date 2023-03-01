

const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmedPassword = document.getElementById('confirmed-password');
const form = document.getElementById('registration-form');
const usernameErrorEl = document.getElementById('username-error');
const passwordErrorEl = document.getElementById('password-error');
const confirmedPasswordErrorEl = document.getElementById('confirmed-password-error');

form.addEventListener('submit', function (ev) {
    let usernameMessages = [];
    let passwordMessages = [];
    let confirmedPasswordMessages = [];

    let firstChar = username.value.charAt(0);


    if (username.value == '' || username.value == null) {
        usernameMessages.push('-Username input is required');
    }

    if (username.value.length < 3 && username.value.length > 1) {
        usernameMessages.push('-Username must be at least 3 characters long');
    }

    if (username.value.length > 3) {
        if (!isAlphabet(username.value.charAt(0))) {
            usernameMessages.push('-Username requires first character to be a letter');
        }

        if (!isAlphanumeric(username.value)) {
            usernameMessages.push('-Username should only include letters and numbers');
        }
    }

    if (password.value == '' || password.value == null) {
        passwordMessages.push('-Password input is required');
    }

    if (password.value.length < 8 && password.value.length >= 1) {
        passwordMessages.push('-Password must be at least 8 characters long');
    }


    if (password.value.length >= 8) {
        if (!has1Digit(password.value)) {
            passwordMessages.push('-Password must have 1 digit');
        }

        if (!hasSpecialChar(password.value)) {
            passwordMessages.push('Password must have 1 special character');
        }

        if (!hasUppercaseLetter(password.value)) {
            passwordMessages.push('-Password must have at least 1 uppercase character');
        }
    }

    if(password.value != confirmedPassword.value){
        confirmedPasswordMessages.push('Passwords are not the same');
    }

    if (usernameMessages.length > 0 || passwordMessages.length > 0 || confirmedPasswordMessages.length >0) {
        ev.preventDefault();
        usernameErrorEl.innerText = usernameMessages.join('\n');
        passwordErrorEl.innerText = passwordMessages.join('\n');
        confirmedPasswordErrorEl.innerText = confirmedPasswordMessages.join('\n');
    }
})

function isAlphanumeric(str) {
    let pattern = /^[a-z0-9]+$/gi;
    return pattern.test(str);
};


function isAlphabet(char) {
    let pattern = /^[a-zA-Z]*$/;
    return pattern.test(char);
}

function hasSpecialChar(string) {
    let pattern = /[\/*\-+!@#$^&~[\]]/g;
    var array = string.match(pattern);
    var count = null;;
    if (array == null) {
        return false
    } else {
        count = string.match(pattern).length;
    }
    if (count != 1) {
        return false;
    }
    return true;
}

function has1Digit(string) {
    let pattern = /[0-9]/g;
    var array = string.match(pattern);
    var count = null;;
    if (array == null) {
        return false
    } else {
        count = string.match(pattern).length;
    }
    if (count != 1) {
        return false;
    }
    return true;
}

function hasUppercaseLetter(string) {
    let pattern = /[A-Z]+/g;
    return pattern.test(string);
}



