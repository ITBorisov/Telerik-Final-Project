/* globals $ */
export function validateTitle(value) {
    let titleField = $('#title');
    let stringRegex = /^[a-zA-Z0-9\- ]+$/;
    validateString(value, 3, 15, titleField);
    validateWithRegex(value, stringRegex, 'Only latin characters!', titleField);
}

export function validateDescription(value) {
    let descriptionField = $('#description');
    var descriptionRegex = /^[a-zA-Z0-9\- ]+$/;
    validateString(value, 20, 250, descriptionField);
    validateWithRegex(value, descriptionRegex, 'Only A-Z, a-z, 0-9 and -', descriptionField);
}

export function validateReview(value) {
    let reviewField = $('#reviewText');
    var reviewRegex = /^[a-zA-Z0-9\- ]+$/;
    validateString(value, 20, 500, reviewField);
    validateWithRegex(value, reviewRegex, 'Only A-Z, a-z, 0-9 and -', reviewField);
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