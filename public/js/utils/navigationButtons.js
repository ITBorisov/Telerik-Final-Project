/* globals $*/

(function () {

    const dropdownClose = $(".dropdown-close");
    const dropdownLi = $(".dropdown");
    dropdownClose.on("click",function(){
        dropdownLi.removeClass("open")
    })

    let sessionStorageAuthtoken = sessionStorage.getItem('authtoken');
    if (sessionStorageAuthtoken === null) {
        $('#buttonLogin').removeClass('hidden');
        $('#buttonRegister').removeClass('hidden');
    }
    else {
        $('#buttonLogin').addClass('hidden');
        $('#buttonRegister').addClass('hidden');
        $('#buttonLogout').removeClass('hidden');
        $('#buttonAddReview').removeClass('hidden');
        $('#buttonProfile').removeClass('hidden');
    }
})();