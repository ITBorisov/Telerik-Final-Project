import { load as loadTemplate } from 'templates';
import { getReview, getLatestUsers, getLatestReview } from 'data';


export function reviewController (context){

    let id = context.params.id;
    Promise.all([getReview('reviews', id), getLatestUsers(), getLatestReview('reviews'), loadTemplate('review') ])
        .then(([dataResponse, newestUsers, latestReview, template]) => {
         
            let reviews = {
				review: dataResponse,
                users: newestUsers,
                newReviews: latestReview
			};

            console.log(reviews)
            context.$element().html(template(reviews));
        })   
    
}