import { load as loadTemplate } from 'templates';
import { getBooks as getBooks } from 'data';


export function homeController (context){
    Promise.all([getBooks('books'), loadTemplate('home') ])
        .then(([dataResponse, template]) => {
            
            let test = {
				testa: dataResponse
			};

            context.$element().html(template(test));
        })   
    
}