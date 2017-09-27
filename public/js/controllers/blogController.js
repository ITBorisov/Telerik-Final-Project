import { load as loadTemplate } from 'templates';
import { getReviews, getLatestUsers } from 'data';


export function blogController (context){

    Promise.all([getReviews('reviews'), getLatestUsers(), loadTemplate('blog') ])
        .then(([dataResponse, newestUsers, template]) => {
            console.log(newestUsers)
            let reviews = {
				review: dataResponse,
                users: newestUsers
			};

            context.$element().html(template(reviews));
        })   
    
}