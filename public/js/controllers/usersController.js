import { load as loadTemplate } from 'templates';

export function loadRegistrationForm(context){

    loadTemplate('registration')
    .then(template => {
            context.$element().html(template());
    })
}

export function loadLoginForm(context){
    loadTemplate('login')
    .then(template => {
            context.$element().html(template());
    })
}