import { load as loadTemplate } from 'templates';
import { getReview, getLatestUsers } from 'data';


export function reviewController (context){

    let id = context.params.id;
    Promise.all([getReview('reviews', id), getLatestUsers(), loadTemplate('review') ])
        .then(([dataResponse, newestUsers, template]) => {
         
            let reviews = {
				review: dataResponse,
                users: newestUsers
			};

            console.log(reviews)
            context.$element().html(template(reviews));
        })   
    
}