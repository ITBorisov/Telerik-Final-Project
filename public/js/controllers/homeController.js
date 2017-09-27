import { load as loadTemplate } from 'templates';
import { getLatestReview } from 'data';


export function homeController (context){
    Promise.all([getLatestReview('reviews'), loadTemplate('home') ])
        .then(([dataResponse, template]) => {
            
            let reviews = {
				review: dataResponse
			};

            context.$element().html(template(reviews));
        })   
    
}