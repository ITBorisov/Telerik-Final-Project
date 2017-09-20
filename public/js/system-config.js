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
        'homeController': 'js/controllers/homeController.js',
		'templates': 'js/templates.js'
		
		
	}
});

System.import('app');