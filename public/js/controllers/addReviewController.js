import { load as loadTemplate } from 'templates'
import { addReview } from 'data';
import { createReview } from 'model-factory';

export function addReviewController (context){
    loadTemplate('addReview')
        .then(template => {
            context.$element().html(template());

            let $addReviewForm = $('#addReview');
            $addReviewForm.on('submit', function(ev){
            ev.preventDefault();

            let title = $('#title').val();
            let description = $('#description').val();
            let category = $('#category').val();
            let reviewText = $('#reviewText').val();
            
            let date = getDate();
            /* upload image */
            let image = [];
				if ($('#imgContainer').find('img').length > 0) {
					let imagesFromForm = $('#imgContainer').find('img').each((i, img) => {
						let $img = $(img);
						image.push($img.attr('src'));
					});
				}

            let authtoken = sessionStorage.getItem('authtoken');
            let author = sessionStorage.getItem('username');

            
            
            let review;
            try {
               review = createReview(category, title, description, reviewText, author, date, image);
            }
            catch(e){
                toastr.warning('Please fill all fields correct!');
                return;
            }
            
            addReview(review, authtoken)
                .then(response => {
                    toastr.success('Successfully created new review');
                    context.redirect('#/reviews');
                })

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