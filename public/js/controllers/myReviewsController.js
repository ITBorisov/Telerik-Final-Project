import {load as loadTemplate} from 'templates';
import { getMyReviews } from 'data';
import { deleteById } from 'data';

export  function myReviewsController(context){

    let creatorId = sessionStorage.getItem('id');
    let authToken = sessionStorage.getItem('authtoken')
    Promise.all([getMyReviews('reviews', creatorId, authToken ), loadTemplate('myReviews')])
        .then(([dataResponse, template]) => {

            let myReviews = {
                review: dataResponse
            }
            context.$element().html(template(myReviews));
            $(".preloading").fadeOut("slow");

            $(document).on('click', ".deleteButton", function () {
               let reviewId =  $(this).attr('data-id');
               deleteById('reviews', reviewId, authToken)
                    .then(response => {
						toastr.success('Successfully delete');
						setTimeout(function () {
                        window.location.reload(true);
                    }, 1000);
					}, error => {
						toastr.error('Cannot delete');
					});
            });
        }) 
}
