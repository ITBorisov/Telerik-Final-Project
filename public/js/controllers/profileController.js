/* globals $, toastr */
import { load as loadTemplate } from 'templates';
import { getUserProfileById } from 'data';

export function profileController(context){
    let userId = sessionStorage.getItem('id');
    let authtoken = sessionStorage.getItem('authtoken');

    Promise.all([getUserProfileById(userId, authtoken), loadTemplate('profile')])
        .then(([userData, template]) => {
            
            let userProfile = {
                user: userData
            }

            context.$element().html(template(userProfile));

            
        })
}
