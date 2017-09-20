/*globals $, Sammy*/

import { homeController } from 'homeController';
import * as usersController from 'usersController';

(function () {
	var sammyApp = Sammy('#app-container', function () {

		this.get('#/');

		this.get('#/home', homeController);

        this.get('#/register', usersController.loadRegistrationForm);

		this.get('#/login', usersController.loadLoginForm);

		

	});

	$(function () {
		sammyApp.run('#/');
	});
})();