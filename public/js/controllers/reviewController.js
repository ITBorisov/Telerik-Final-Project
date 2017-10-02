import { load as loadTemplate } from 'templates';
import { getReview, getLatestUsers, getLatestReview, addNewComment, getComments } from 'data';
import { guestUserAuthToken } from 'constants';

export function reviewController (context){

    let id = context.params.id;
    let authtoken = sessionStorage.getItem('authtoken') || guestUserAuthToken;

    Promise.all([getReview('reviews', id), getLatestUsers(), getLatestReview('reviews'), getComments('comments', id, authtoken), loadTemplate('review') ])
        .then(([dataResponse, newestUsers, latestReview, dataComments, template]) => {
         
            let reviews = {
				review: dataResponse,
                users: newestUsers,
                newReviews: latestReview,
                comments: dataComments
			};

            console.log(reviews)
            context.$element().html(template(reviews));


            let $addComment = $('#addComment');
            
            let date = getDate();
            let image = '';
            $addComment.on('submit', function(ev){
                ev.preventDefault();
                let name = $('#name').val();
                let email = $('#email').val();
                let message = $('#message').val();

                let comment = {
                    reviewId: id,
                    name: name,
                    email: email,
                    message: message,
                    date: date,
                    image: image
                };
                addNewComment(comment, authtoken, 'comments')
            })
        })   
    
}



function getDate(){
    Date.prototype.getMonthName = function () {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return months[this.getMonth()];
    };


    let date = new Date();
    let month = date.getMonthName();
    let day = date.getDate();
    let year = date.getFullYear();

    let currentDate = month + ' ' + day + ', ' + year

    return currentDate;
}