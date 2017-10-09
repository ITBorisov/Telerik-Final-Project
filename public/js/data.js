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

export function getLatestReview(params, count){
        let url = CONSTANTS.kinveyAppDataUrl + '/' + params + '/' + '?query={}&sort={"_kmd": -1}&limit=' + count;
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

export function addReview(review, authtoken){
        let url = CONSTANTS.kinveyAppDataUrl + '/reviews' ;
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };
        let body = { "category": review._category, 
        "title": review._title, 
        "description": review._description,
        "reviewText": review._reviewText,
        "author": review._author,
        "date": review._date,
        "img": review._image 
        };
        return requester.post(url, JSON.stringify(body), headers);
}

export function deleteById(colection, id, authtoken){
        let url = CONSTANTS.kinveyAppDataUrl + '/' + colection + '/' + id;
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };

        return requester.del(url, headers);
}


export function getLatestUsers(count){
        let url = CONSTANTS.kinveyUsersUrl + '/' + '?query={}&sort={"_kmd": -1}&limit=' + count;
        let guestUserAuthToken = CONSTANTS.guestUserAuthToken;
        const kinveyAuthHeaders = { 'Authorization': "Kinvey " + guestUserAuthToken };

        return requester.get(url, kinveyAuthHeaders);
}

export function registerUser(newUser) {
        let url = CONSTANTS.kinveyUsersUrl;
        let headers = CONSTANTS.kinveyBasicHeaders;
        let body = { "username": newUser._username, 
        "password": newUser._password, 
        "firstName": newUser._firstName,
        "lastName": newUser._lastName,
        "email": newUser._email 
        };

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
        let url = CONSTANTS.kinveyUsersUrl + '/' + userId;
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };
        return requester.get(url, headers);
}

export function addUserProfileImage(user, profileId, authtoken) {
        let url = CONSTANTS.kinveyUsersUrl + '/' + profileId;
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };
        let body = user;

        return requester.put(url, JSON.stringify(body), headers);
}


export function addNewComment(params, authtoken, collection) {
        let url = CONSTANTS.kinveyAppDataUrl + '/' + collection;
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };
        let body = params;

        return requester.post(url, JSON.stringify(body), headers);
}

export function getComments(collection, id, authtoken ){
        let filter = JSON.stringify({ "reviewId": id });
        let url = CONSTANTS.kinveyAppDataUrl + '/' + collection + '/?query=' + filter;
        let headers = { 'Authorization': CONSTANTS.kinveyUserAuthorization + authtoken };

        return requester.get(url, headers);
}

export function getMyComments(collection, creatorId, authtoken){
        let url = CONSTANTS.kinveyAppDataUrl + '/' + collection + '/' + '?query={"_acl.creator":"' + creatorId + '"}';
        const kinveyAuthHeaders = { 'Authorization': "Kinvey " + authtoken };

        return requester.get(url, kinveyAuthHeaders);
}   