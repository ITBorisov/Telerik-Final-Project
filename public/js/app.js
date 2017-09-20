/*globals $, Sammy*/

import { homeController } from 'homeController';


(function () {
	var sammyApp = Sammy('#app-container', function () {

		this.get('#/', homeController);

		this.get('#/home', homeController);

        this.get('#/about', homeController);

		

	});

	$(function () {
		sammyApp.run('#/');
	});
})();