/* globals $, toastr */
import { load as loadTemplate } from 'templates';
import { getLatestUsers } from 'data';


export function criticsController (context){
    Promise.all([getLatestUsers(), loadTemplate('critics') ])
        .then(([dataResponse, template]) => {
    
            let user = {
				users: dataResponse
			};

            context.$element().html(template(user));
			$(".preloading").fadeOut("slow");
        });   
    
}