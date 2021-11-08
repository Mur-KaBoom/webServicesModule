const { expect } = require ('chai');
const request = require ('../request/request');

describe('Implement module task', () => {

    let opts;
    let response;

    before(async () => {
        opts = {
            "method": "GET",
            "uri": "https://jsonplaceholder.typicode.com/users",
            "json": true,
            "resolveWithFullResponse": true 
        };
        response = await request(opts);
    });

    it('Response body should be an array of 10 elements', async () => {
        expect(response.body.length).to.be.equal(10);
    });

})