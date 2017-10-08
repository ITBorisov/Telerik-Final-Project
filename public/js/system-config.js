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
		'search': 'js/utils/search.js',
		'reviewValidator': 'js/utils/validators/reviewValidator.js',
		'userValidator': 'js/utils/validators/userValidator.js',
		'templates': 'js/templates.js',
		

		// controllers //
        'homeController': 'js/controllers/homeController.js',
		'usersController': 'js/controllers/usersController.js',
		'blogController': 'js/controllers/blogController.js',
		'addReviewController': 'js/controllers/addReviewController.js',
		'reviewController': 'js/controllers/reviewController.js',
		'reviewsCategoryController': 'js/controllers/reviewsCategoryController.js',
		'profileController': 'js/controllers/profileController.js',
		'myReviewsController': 'js/controllers/myReviewsController.js',
		'myCommentsController': 'js/controllers/myCommentsController.js',

		// models //
		'user-model': 'js/models/user-model.js',
		'review-model': 'js/models/review-model.js',
		'comment-model': 'js/models/comment-model.js',
		'model-factory': 'js/models/model-factory.js'
		
		
	}
});

System.import('app');