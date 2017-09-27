import { load as loadTemplate } from 'templates';
import { getReviewsCategory, getLatestUsers, getLatestReview } from 'data';


export function reviewsCategoryController (context){


    let path = context.path;
    let category = path.substring(11)
    
    Promise.all([getReviewsCategory('reviews', category), getLatestUsers(), getLatestReview('reviews'), loadTemplate('reviewsCategory') ])
        .then(([dataResponse, newestUsers, latestReview, template]) => {
            let reviews = {
				review: dataResponse,
                categoryPath: category,
                users: newestUsers,
                newReviews: latestReview
			};
            console.log(reviews)
            context.$element().html(template(reviews));
        })   
    
}