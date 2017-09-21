import { load as loadTemplate } from 'templates';
import {loginUser, registerUser} from 'data';

export function loadRegistrationForm(context){

    loadTemplate('register')
    .then(template => {
        context.$element().html(template());
        let $registerForm = $('#register');
        $registerForm.on('submit', function(ev){
            ev.preventDefault();

            let username = $('#username').val();
            let password = $('#password').val();

            register(context, username, password)
        })
    })
}

export function loadLoginForm(context){
    loadTemplate('login')
    .then(template => {
        context.$element().html(template());
        let $loginForm = $('#login');
        $loginForm.on('submit', function(ev){
            ev.preventDefault();
            
            let username = $('#username').val();
            let password = $('#password').val();

            let user = {'username': username, 'password': password}

            login(context, user)
        })
    })
}


function register(context, username, password){
    registerUser(username, password)
        .then(respose => {
            console.log(respose);
        })
}

function login(context, user){
    loginUser(user)
    .then(response => {
        console.log(response)
    })
}