import {load as loadTemplate} from 'templates';
import { getMyReviews } from 'data';

export  function myReviewsController(context){

    let creatorId = sessionStorage.getItem('id');
    let authToken = sessionStorage.getItem('authtoken')
    Promise.all([getMyReviews('reviews', creatorId, authToken ), loadTemplate('myReviews')])
        .then(([dataResponse, template]) => {

            let myReviews = {
                review: dataResponse
            }
            console.log(myReviews);
            context.$element().html(template(myReviews));
        }) 
}
