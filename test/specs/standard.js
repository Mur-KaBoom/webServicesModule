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

    it('Status should be 200 OK', async () => {
        expect(response.statusCode).to.be.equal(200);
    });

    it('header content-type should be application/json; charset=utf-8', async () => {
        expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8');
    });

})