import { load as loadTemplate } from 'templates';
import { getReviews as getReviews } from 'data';


export function blogController (context){

    Promise.all([getReviews('reviews'), loadTemplate('blog') ])
        .then(([dataResponse, template]) => {
            
            let reviews = {
				review: dataResponse
			};

            context.$element().html(template(reviews));
        })   
    
}