/* globals $ */
export function validateUsername(value) {
    let usernameField = $('#username');
    var usernameRegex = /^[a-zA-Z0-9\-]+$/;
    validateString(value, 3, 15, usernameField);
    validateWithRegex(value, usernameRegex, 'Only A-Z, a-z, 0-9 and -', usernameField);
}

export function validatePassword(value) {
    let passwordField = $('#password');
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    validateString(value, 5, 15, passwordField);
    validateWithRegex(value, usernameRegex, 'Only A-Z, a-z, 0-9 characters!', passwordField);
}

export function validateFirstName(value) {
    let firstNameField = $('#firstName');
    let stringRegex = /^[A-Za-z]+$/;
    validateString(value, 3, 15, firstNameField);
    validateWithRegex(value, stringRegex, 'Only latin characters!', firstNameField);
}

export function validateLastName(value) {
    let lastNameField = $('#lastName');
    let stringRegex = /^[A-Za-z]+$/;
    validateString(value, 3, 15, lastNameField);
    validateWithRegex(value, stringRegex, 'Only latin characters!', lastNameField);
}



export function validateEmail(value) {
    let emailFiled = $('#email');
    let emailRegex = /^\w+@[a-zA-Z.]+$/;
    validateWithRegex(value, emailRegex, 'Invalid e-mail', emailFiled);
}


function validateString(value, minLength, maxLength, field) {
    if (value.length < minLength || value.length > maxLength) {
        let errMessage = `Between ${minLength} and ${maxLength} characters`;
        field.addClass('errorInput').val('').attr('placeholder', errMessage);
        throw new Error(errMessage);
    }
}

function validateWithRegex(value, regex, errMessage, field) {
    if (!regex.test(value)) {
        field.addClass('errorInput').val('').attr('placeholder', errMessage);
        throw new Error(errMessage);
    }
}

function validateNumber(value, errMessage, field) {
    if (!Number.isInteger(parseInt(value))) {
        field.addClass('errorInput').val('').attr('placeholder', errMessage);
        throw new Error(errMessage);
    }
}