const kinveyKey = 'kid_SJohzaC9-';
const kinveySecret = '420837364cdf42bb8b693259dcea163c';
const kinveyBasicHeaders = { 'Authorization': "Basic " + btoa(kinveyKey + ":" + kinveySecret)};
const guestUserAuthToken = '70d20706-ebe8-4bbc-b20a-7d65e07d32f0.SBaRLC2jFXzWbTV/wRVlu1aroCTxRQGndizVu7I+p4E=';

const kinveyAppDataUrl = 'https://baas.kinvey.com/appdata/kid_SJohzaC9-';
const kinveyUsersUrl = 'https://baas.kinvey.com/user/kid_SJohzaC9-';

const kinveyHeaderKey = 'Authorization';
const kinveyUserAuthorization = 'Kinvey ';

export { kinveyKey, kinveySecret, kinveyBasicHeaders, guestUserAuthToken, kinveyAppDataUrl, kinveyUsersUrl, kinveyUserAuthorization  };