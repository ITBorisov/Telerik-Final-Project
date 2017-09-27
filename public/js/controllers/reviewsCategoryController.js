import { load as loadTemplate } from 'templates';
import { getReviewsCategory } from 'data';


export function reviewsCategoryController (context){


    let path = context.path;
    let category = path.substring(11)
    console.log(category)
    Promise.all([getReviewsCategory('reviews', category), loadTemplate('blog') ])
        .then(([dataResponse, template]) => {
            let reviews = {
				review: dataResponse
			};

            context.$element().html(template(reviews));
        })   
    
}