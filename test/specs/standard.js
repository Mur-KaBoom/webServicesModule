const { expect } = require ('chai');
const request = require ('../request/request');

describe('Implement module task', () => {

    let opts;
    let response;

    before(async () => {
        opts = {
            "method": "GET",
            "uri": "https://jsonplaceholder.typicode.com/users",
            "json": true
        };
        this.response = await request(opts);
    });


    it('Status should be 200 OK', async () => {
        expect(this.response.statusCode).to.be.equal(200);
    });

    it('header content-type should be application/json; charset=utf-8', async () => {
        expect(this.response.header.contentType).to.be('application/json; charset=utf-8');
    });

    it('Response body should be an array of 10 elements', async () => {
        expect(this.response.body.length).to.be.equal(10);
    });

})