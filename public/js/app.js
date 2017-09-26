/*globals $, Sammy*/
import 'logout';
import 'navigationButtons';

import { homeController } from 'homeController';
import { blogController } from 'blogController';
import { addReviewController } from 'addReviewController';
import * as usersController from 'usersController';

(function () {
	var sammyApp = Sammy('#app-container', function () {

		this.get('#/', homeController);

		this.get('#/home', homeController);

		this.get('#/reviews', blogController);

        this.get('#/register', usersController.loadRegistrationForm);

		this.get('#/login', usersController.loadLoginForm);

		this.get('#/reviews/add', addReviewController);

	});

	$(function () {
		sammyApp.run('#/');
	});
})();