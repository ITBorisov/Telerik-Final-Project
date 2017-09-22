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
               

                sessionStorage.clear();
                console.log('Uspeshno')
            }, error => {
                console.log('Neuspeshno')
            });
    });
})();