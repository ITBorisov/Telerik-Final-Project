import * as requester from 'requester';
import * as CONSTANTS from 'constants';


export function getBooks(params){
        let url = CONSTANTS.kinveyAppDataUrl + '/' + params;
        let guestUserAuthToken = CONSTANTS.guestUserAuthToken;
        const kinveyAuthHeaders = { 'Authorization': "Kinvey " + guestUserAuthToken };

        return requester.get(url, kinveyAuthHeaders);
}
export function registerUser(newUser, password) {
        let url = CONSTANTS.kinveyUsersUrl;
        let headers = CONSTANTS.kinveyBasicHeaders;
        let body = { "username": newUser.username, "password": password };

        return requester.post(url, JSON.stringify(body), headers);
}

export function loginUser(user) {
        let url = CONSTANTS.kinveyUsersUrl + '/login';
        let headers = CONSTANTS.kinveyBasicHeaders;
        let body = { "username": user.username, "password": user.password };

        return requester.post(url, JSON.stringify(body), headers);
}