/* globals $, toastr */
import { load as loadTemplate } from 'templates';
import { getUserProfileById, addUserProfileImage } from 'data';
import { guestUserAuthToken, guestUserId } from 'constants'; 


export function myProfile(context){
    let userId = sessionStorage.getItem('id');
    let authtoken = sessionStorage.getItem('authtoken');

    Promise.all([getUserProfileById(userId, authtoken), loadTemplate('profile')])
        .then(([userData, template]) => {
            let creationDate  = new Date(userData._kmd['ect']).toDateString().substring(4);
            userData['creationTime'] = creationDate;
            let userProfile = {
                user: userData
            }

            context.$element().html(template(userProfile));

           
            let id = userData._id;
            let username = userData.username;
            let firstName = userData.firstName;
            let lastName = userData.lastName;
            let email = userData.email;

            let user = {
                id: id,
                username: username,
                firstName: firstName,
                lastName: lastName,
                email: email
            }


            let input = $('#file');
            input.on('change', function () {
            showImage(this);
            });
            $('#submit-image').on('click', function () {
                if ($('#imgContainer').find('img').length > 0) {
                    addProfileImage(user)
                        .then(response => {
                            toastr.success('Successfully added new profile image');
                            getUserProfileById(userId, authtoken)
                                .then(response => {
                                    sessionStorage.setItem('image', user.image);
                                    let imgContainer = $('#imgContainer');
                                    imgContainer.empty();
                                    input.val('');
                                    window.location.reload(true);
                                }, error => {
                                    toastr.error('Cannot save the picture');
                                });
                        }, error => {
                            toastr.error('Cannot save the picture');
                        });
                }
                else {
                    toastr.info('You must upload a picture first');
                }
            });  
        })
}


export function userProfile(context){

    let userId = context.params['id'];  //take from url
    let authtoken = sessionStorage.getItem('authtoken') || guestUserAuthToken;
    console.log(userId);
    if (userId === guestUserId) {
        toastr.info('The account you are trying to view does not exist');
        context.redirect('#/home');
    }

Promise.all([getUserProfileById(userId, authtoken), loadTemplate('profile')])
        .then(([userData, template]) => {
            let creationDate  = new Date(userData._kmd['ect']).toDateString().substring(4);
            userData['creationTime'] = creationDate;
            let userProfile = {
                user: userData
            }
            
            context.$element().html(template(userProfile));
            $('#upload-image-form').remove();
            $('#new-review').remove();
            $('#my-reviews').remove();
            $('#my-comments').remove();
        })
}

function showImage(input) {
    if (input.files && input.files[0]) {
        let img = input.files[0];
        let fileReader = new FileReader();
        fileReader.onload = function (e) {
            let imgContainer = $('#imgContainer');
            imgContainer.empty();
            $('<img>')
            .attr('id', 'profile-image')
            .attr('src', e.target.result)
            .addClass('img-thumbnail')
            .appendTo(imgContainer);
        }
        fileReader.readAsDataURL(img);
    }
}

function addProfileImage(user) {
    let currentUser = user;
    let authtoken = sessionStorage.getItem('authtoken');
    let profileId = sessionStorage.getItem('id');
    let uploadedImage = $('#profile-image').attr('src'); 
    currentUser.image = uploadedImage;
    return addUserProfileImage(currentUser, profileId, authtoken);
}