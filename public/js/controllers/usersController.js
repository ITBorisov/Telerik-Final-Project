import { load as loadTemplate } from 'templates';
import {loginUser, registerUser} from 'data';
import { createUser } from 'model-factory';

export function loadRegistrationForm(context){

    loadTemplate('register')
    .then(template => {
        context.$element().html(template());
        let $registerForm = $('#register');
        $registerForm.on('submit', function(ev){
            ev.preventDefault();

            let username = $('#username').val();
            let password = $('#password').val();
            let firstName = $('#firstName').val();
            let lastName = $('#lastName').val();
            let email = $('#email').val();

            
            let user;
            try {
               user = createUser(username, password, email, firstName, lastName);
            }
            catch(e){
                toastr.warning('Please fill all fields correct!');
                return;
            }
            register(context, user)
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

            let user = { 'username': username, 'password': password };
            login(context, user)
        })
    })
}


function register(context, user){
    registerUser(user)
        .then(respose => {
            toastr.success('Successful registration')

            setTimeout(function () {
                window.location.href = '#/login';
                window.location.reload(true);
            }, 1000);
        })
}

function login(context, user){
    loginUser(user)
    .then(response => {
        toastr.success('Successful login');
        let username = response.username;
        let authtoken = response._kmd.authtoken;
        let userId = response._id;
        let image = response.image;
        console.log(response);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('authtoken', authtoken);
        sessionStorage.setItem('id', userId);
        sessionStorage.setItem('image', image);

        setTimeout(function () {
                window.location.href = '#/home';
                window.location.reload(true);
            }, 1000);
    })
}