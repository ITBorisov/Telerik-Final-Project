import * as requester from 'requester';
import * as CONSTANTS from 'constants';


export function getReviews(params){
        let url = CONSTANTS.kinveyAppDataUrl + '/' + params + '/' + '?query={}&sort={"_kmd": -1}';
        let guestUserAuthToken = CONSTANTS.guestUserAuthToken;
        const kinveyAuthHeaders = { 'Authorization': "Kinvey " + guestUserAuthToken };

        return requester.get(url, kinveyAuthHeaders);
}

export function getReview(params, id){
        let url = CONSTANTS.kinveyAppDataUrl + '/' + params + '/' + id;
        let guestUserAuthToken = CONSTANTS.guestUserAuthToken;
        const kinveyAuthHeaders = { 'Authorization': "Kinvey " + guestUserAuthToken };

        return requester.get(url, kinveyAuthHeaders);
}

export function getLatestReview(params){
        let url = CONSTANTS.kinveyAppDataUrl + '/' + params + '/' + '?query={}&sort={"_kmd": -1}&limit=3';
        let guestUserAuthToken = CONSTANTS.guestUserAuthToken;
        const kinveyAuthHeaders = { 'Authorization': "Kinvey " + guestUserAuthToken };

        return requester.get(url, kinveyAuthHeaders);
}

export function getReviewsCategory(params, category){
        let url = CONSTANTS.kinveyAppDataUrl + '/' + params + '/' + '?query={"category":' + '"' + category + '"}';
        console.log(url);
        let guestUserAuthToken = CONSTANTS.guestUserAuthToken;
        const kinveyAuthHeaders = { 'Authorization': "Kinvey " + guestUserAuthToken };

        return requester.get(url, kinveyAuthHeaders);
}

export function getMyReviews(collection, creatorId, authtoken){
        let url = CONSTANTS.kinveyAppDataUrl + '/' + collection + '/' + '?query={"_acl.creator":"' + creatorId + '"}';
        const kinveyAuthHeaders = { 'Authorization': "Kinvey " + authtoken };

        return requester.get(url, kinveyAuthHeaders);
}       

export function addReview(params, authtoken){
        let url = CONSTANTS.kinveyAppDataUrl + '/reviews' ;
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };
        let body = params;
        return requester.post(url, JSON.stringify(body), headers);
}

export function deleteReview(id, authtoken){
        let url = CONSTANTS.kinveyAppDataUrl + '/reviews' + '/' + id;
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };

        return requester.del(url, headers);
}


export function getLatestUsers(){
        let url = CONSTANTS.kinveyUsersUrl + '/' + '?query={}&sort={"_kmd": -1}&limit=6';
        let guestUserAuthToken = CONSTANTS.guestUserAuthToken;
        const kinveyAuthHeaders = { 'Authorization': "Kinvey " + guestUserAuthToken };

        return requester.get(url, kinveyAuthHeaders);
}

export function registerUser(newUser, password) {
        let url = CONSTANTS.kinveyUsersUrl;
        let headers = CONSTANTS.kinveyBasicHeaders;
        let body = newUser;

        return requester.post(url, JSON.stringify(body), headers);
}

export function loginUser(user) {
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


export function getUserProfileById(userId, authtoken) {
        let url = CONSTANTS.kinveyUsersUrl + '/' + userId
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };
        return requester.get(url, headers);
}