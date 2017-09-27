import { load as loadTemplate } from 'templates';
import { getReviews, getLatestUsers, getLatestReview } from 'data';


export function blogController (context){

    Promise.all([getReviews('reviews'), getLatestUsers(), getLatestReview('reviews'), loadTemplate('blog') ])
        .then(([dataResponse, newestUsers, latestReview, template]) => {
            console.log(newestUsers)
            let reviews = {
				review: dataResponse,
                users: newestUsers,
                newReviews: latestReview
			};

            context.$element().html(template(reviews));
        })   
    
}