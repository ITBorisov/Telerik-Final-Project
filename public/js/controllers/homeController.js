import { load as loadTemplate } from 'templates';

export function homeController (context){
    loadTemplate('home')
		.then(template => {
			context.$element().html(template());
		});
}