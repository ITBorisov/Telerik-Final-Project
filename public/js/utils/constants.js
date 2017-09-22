const kinveyKey = 'kid_SJohzaC9-';
const kinveySecret = '420837364cdf42bb8b693259dcea163c';
const kinveyBasicHeaders = { 'Authorization': "Basic " + btoa(kinveyKey + ":" + kinveySecret)};
const guestUserAuthToken = 'ab50ccf6-3b56-4a39-9c54-9e29afde564a.BGs3+rrwac05UuyY4W/6nIfc445K3V66X9P9tCYXVmw=';

const kinveyAppDataUrl = 'https://baas.kinvey.com/appdata/kid_SJohzaC9-';
const kinveyUsersUrl = 'https://baas.kinvey.com/user/kid_SJohzaC9-';

const kinveyHeaderKey = 'Authorization';
const kinveyUserAuthorization = 'Kinvey ';

export { kinveyKey, kinveySecret, kinveyBasicHeaders, guestUserAuthToken, kinveyAppDataUrl, kinveyUsersUrl, kinveyUserAuthorization  };