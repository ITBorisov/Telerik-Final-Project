import * as requester from 'requester';
import * as CONSTANTS from 'constants';


export function getReviews(params){
        let url = CONSTANTS.kinveyAppDataUrl + '/' + params;
        let guestUserAuthToken = CONSTANTS.guestUserAuthToken;
        const kinveyAuthHeaders = { 'Authorization': "Kinvey " + guestUserAuthToken };

        return requester.get(url, kinveyAuthHeaders);
}

export function addReview(params, authtoken){
        let url = CONSTANTS.kinveyAppDataUrl + '/reviews' ;
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };
        let body = params;
        return requester.post(url, JSON.stringify(body), headers);
}

export function registerUser(newUser, password) {
        let url = CONSTANTS.kinveyUsersUrl;
        let headers = CONSTANTS.kinveyBasicHeaders;
        let body = { "username": newUser, "password": password };

        return requester.post(url, JSON.stringify(body), headers);
}

export function loginUser(user) {
        console.log(user);
        let url = CONSTANTS.kinveyUsersUrl + '/login';
        let headers = CONSTANTS.kinveyBasicHeaders;
        let body = { "username": user.username, "password": user.password };

        return requester.post(url, JSON.stringify(body), headers);
}

export function logoutUser(authtoken) {
        let url = CONSTANTS.kinveyUsersUrl + '/_logout';
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };

        return requester.post(url, {}, headers);
}