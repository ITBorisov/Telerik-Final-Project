/* globals $*/

(function () {
    let sessionStorageAuthtoken = sessionStorage.getItem('authtoken');
    if (sessionStorageAuthtoken === null) {
        $('#buttonLogin').removeClass('hidden');
        $('#buttonRegister').removeClass('hidden');
    }
    else {
        $('#buttonLogin').addClass('hidden');
        $('#buttonRegister').addClass('hidden');
        $('#buttonLogout').removeClass('hidden');
    }
})();