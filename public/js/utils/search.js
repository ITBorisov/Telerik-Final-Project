import { load as loadTemplate } from 'templates';
import { getReviews, getLatestUsers, getLatestReview } from 'data';


let searchForm = $('#search-form');
let input = $('#searchBar').val();

$('#search').on('click', function(e){
    e.preventDefault()
    let input = $('#searchBar').val();
      


   Promise.all([getReviews('reviews'), getLatestUsers(), getLatestReview('reviews'), loadTemplate('blog') ])
        .then(([dataResponse, newestUsers, latestReview, template]) => {
            let searchResult = search(dataResponse, input)

            let reviews = {
				        review: searchResult,
                users: newestUsers,
                newReviews: latestReview
			      };
            $('#app-container').html(template(reviews));
        })  
})




export function search(allReviews, text){
 let options = {
    caseSensitive: false,
    shouldSort: true,
    tokenize: true,
    findAllMatches: true,
    threshold: 0,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      'author',
      'description',
      'reviewText'
    ]
  };
let fuse = new Fuse(allReviews, options);
  let findReviews = fuse.search(text);
  return findReviews;
}

