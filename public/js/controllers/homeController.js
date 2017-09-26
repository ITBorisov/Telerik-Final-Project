import { load as loadTemplate } from 'templates';
import { getReviews as getReviews } from 'data';


export function homeController (context){
    Promise.all([getReviews('reviews'), loadTemplate('home') ])
        .then(([dataResponse, template]) => {
            
            let test = {
				testa: dataResponse
			};

            context.$element().html(template(test));
        })   
    
}