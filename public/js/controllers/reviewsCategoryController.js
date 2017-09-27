import { load as loadTemplate } from 'templates';
import { getReviewsCategory, getLatestUsers } from 'data';


export function reviewsCategoryController (context){


    let path = context.path;
    let category = path.substring(11)
    
    Promise.all([getReviewsCategory('reviews', category), getLatestUsers(), loadTemplate('reviewsCategory') ])
        .then(([dataResponse, newestUsers, template]) => {
            let reviews = {
				review: dataResponse,
                categoryPath: category,
                users: newestUsers
			};
            console.log(reviews)
            context.$element().html(template(reviews));
        })   
    
}