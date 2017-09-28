/* globals $ */

import { logoutUser } from 'data';

(function () {
    $('#buttonLogout').click(() => {
        let authtoken = sessionStorage.getItem('authtoken');
        
        logoutUser(authtoken)
            .then(response => {
                $('#buttonLogin').removeClass('hidden');
                $('#buttonRegister').removeClass('hidden');
                $('#buttonLogout').addClass('hidden');
                $('#buttonAddReview').addClass('hidden');
               

                sessionStorage.clear();
                toastr.success('Successful logout');
            }, error => {
                console.log('Neuspeshno')
            });
    });
})();