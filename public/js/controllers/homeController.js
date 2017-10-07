import { load as loadTemplate } from 'templates';
import { getLatestReview, getLatestUsers } from 'data';


export function homeController (context){

    Promise.all([getLatestReview('reviews'),getLatestUsers(), loadTemplate('home') ])
        .then(([dataResponse, newestUsers, template]) => {
            
            let reviews = {
				review: dataResponse,
                users: newestUsers
			};

            context.$element().html(template(reviews));
            $(".preloading").fadeOut("slow");
        })   
    
}