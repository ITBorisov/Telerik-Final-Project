/*globals $, Sammy*/
import 'logout';
import 'navigationButtons';

import { homeController } from 'homeController';
import { blogController } from 'blogController';
import { addReviewController } from 'addReviewController';
import { reviewController } from 'reviewController';
import * as usersController from 'usersController';

(function () {
	var sammyApp = Sammy('#app-container', function () {

		this.get('#/', homeController);

		this.get('#/home', homeController);

		this.get('#/reviews', blogController);

        this.get('#/register', usersController.loadRegistrationForm);

		this.get('#/login', usersController.loadLoginForm);

		this.get('#/reviews/add', addReviewController);

		this.get('#/reviews/:id', reviewController)

	});

	$(function () {
		sammyApp.run('#/');
	});
})();