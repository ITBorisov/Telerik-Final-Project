import { load as loadTemplate } from 'templates';
import { getReview } from 'data';


export function reviewController (context){

    let id = context.params.id;
    Promise.all([getReview('reviews', id), loadTemplate('review') ])
        .then(([dataResponse, template]) => {
            console.log(dataResponse);
            let reviews = {
				review: dataResponse
			};

            console.log(reviews)
            context.$element().html(template(reviews));
        })   
    
}