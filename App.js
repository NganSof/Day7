let usename = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let form = document.querySelector("form");

function showError(input, message) {
    const parent = input.parentElement;
    const small = parent.querySelector("small");
    parent.classList.add("error");
    small.innerText = message;
}
function showSuccess(input, message) {
    const parent = input.parentElement;
    const small = parent.querySelector("small");
    parent.classList.remove("error");
    small.innerText = message;
}
function checkEmpty(listInput) {
    let isEmpty = false;
    listInput.forEach((input) => {
        input.value = input.value.trim();
        if (input.value == "") {
            showError(input, "Not value");
        } else {
            showSuccess(input, "");
            checkEmail();
        }
    });
    return isEmpty;
}

function checkEmail(email) {
    console.log(email.value);
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const resultRegex = regex.test(email.value.trim());
    const isEmail = !resultRegex;
    if (resultRegex) {
        showSuccess(email, "");
    } else {
        showError(email, "Please fill syntax right email.");
    }
    return isEmail;
}

function checkLength(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Please input value leghth min ${min}`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Please input value leghth max ${max}`);
        return true;
    }
    showSuccess(input, "");
    return false;
}

function checkPassword(Pass, confirmPass) {
    if (Pass.value !== confirmPass.value) {
        // console.log(confirmPass.value, Pass.value);
        showError(confirmPass, "Password not match.");
        return true;
    }
    return false;
}

form.addEventListener("submit", function (eve) {
    eve.preventDefault();
    let isEmailError = checkEmail(email);
    let isLengthUsenameError = checkLength(usename, 2, 10);
    let isLengthPasswordError = checkLength(password, 5, 10);
    let isPasswordError = checkPassword(password, confirmPassword);
    let isEmptyError = checkEmpty([usename, email, password, confirmPassword]);
    if (
        isEmailError ||
        isLengthUsenameError ||
        isLengthPasswordError ||
        isPasswordError ||
        isEmptyError
    ) {
        // nothing
    } else {
        // call API log in
    }
});
