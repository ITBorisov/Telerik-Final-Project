import { load as loadTemplate } from 'templates'
import { addReview } from 'data';

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


            let authtoken = sessionStorage.getItem('authtoken');
            let author = sessionStorage.getItem('username');
            let review  = {
                author: author,
                title: title,
                description: description,
                category: category
            }
            
            
            addReview(review, authtoken)

        })
        })
}