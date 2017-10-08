import {load as loadTemplate} from 'templates';
import { getMyComments } from 'data';
import { deleteReview } from 'data';

export  function myCommentsController(context){

    let creatorId = sessionStorage.getItem('id');
    let authToken = sessionStorage.getItem('authtoken')
    Promise.all([getMyComments('comments', creatorId, authToken ), loadTemplate('myComments')])
        .then(([dataResponse, template]) => {

            let myComments = {
                comments: dataResponse
            }
            context.$element().html(template(myComments));
            $(".preloading").fadeOut("slow");

            $(document).on('click', ".deleteButton", function () {
               let reviewId =  $(this).attr('data-id');
               deleteReview(reviewId, authToken)
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
