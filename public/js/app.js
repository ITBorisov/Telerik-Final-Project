/*globals $, Sammy*/
import 'logout';
import 'navigationButtons';
import 'toastr-config';

import { homeController } from 'homeController';
import { blogController } from 'blogController';
import { addReviewController } from 'addReviewController';
import { reviewController } from 'reviewController';
import { reviewsCategoryController } from 'reviewsCategoryController';
import { profileController } from 'profileController';
import { myReviewsController } from 'myReviewsController';
import * as usersController from 'usersController';

(function () {
	var sammyApp = Sammy('#app-container', function () {

		this.get('#/', homeController);

		this.get('#/home', homeController);

		this.get('#/reviews', blogController);

        this.get('#/register', usersController.loadRegistrationForm);

		this.get('#/login', usersController.loadLoginForm);

		this.get('#/profile', profileController);

		this.get('#/reviews/add', addReviewController);

		this.get('#/reviews/myreviews', myReviewsController);

		this.get('#/reviews/Action', reviewsCategoryController);
		
		this.get('#/reviews/Comedy', reviewsCategoryController);

		this.get('#/reviews/Crime', reviewsCategoryController);

		this.get('#/reviews/Drama', reviewsCategoryController);

		this.get('#/reviews/Thriller', reviewsCategoryController);

		this.get('#/reviews/Sci-fi', reviewsCategoryController);

		this.get('#/reviews/:id', reviewController);

	});

	$(function () {
		sammyApp.run('#/');
	});
})();