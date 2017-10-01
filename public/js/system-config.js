/* globals System */

System.config({
	transpiler: 'plugin-babel',
	map: {
		'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
		'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',
		'text': 'libs/systemjs-plugin-text/text.js',

		'app': 'js/app.js',
		'requester': 'js/requester.js',
		'data': 'js/data.js',

		'constants': 'js/utils/constants.js',
		'logout' : 'js/utils/logout.js',
		'navigationButtons': 'js/utils/navigationButtons.js',
		'toastr-config': 'js/utils/toastr-config.js',
		'templates': 'js/templates.js',

		// controllers //
        'homeController': 'js/controllers/homeController.js',
		'usersController': 'js/controllers/usersController.js',
		'blogController': 'js/controllers/blogController.js',
		'addReviewController': 'js/controllers/addReviewController.js',
		'reviewController': 'js/controllers/reviewController.js',
		'reviewsCategoryController': 'js/controllers/reviewsCategoryController.js',
		'profileController': 'js/controllers/profileController.js',
		'myReviewsController': 'js/controllers/myReviewsController.js'
		
		
	}
});

System.import('app');