const request = require('request-promise-native');

function sendRequest (data) {
    return request (data).then((response) => {
        return response;
    });
}

module.exports = sendRequest;