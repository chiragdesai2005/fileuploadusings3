var chai = require('chai');
var expect = require("chai").expect;
var request = require('request');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

/*
  * Test the /GET route
  */
describe('/buckets', () => {
    var options = {
        url: 'http://localhost:3000/',
        headers: {
            'Content-Type': 'text/json'
        }
    };
    it('should return 404', function (done) {
        request.get(options, function (err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
    it('should return at least one bucket with desired bucket', function (done) {
        request.get('http://localhost:3000/buckets', function (err, res, body) { 
            //console.log(body);
            expect(res.statusCode).to.equal(200);
            var bodyData = JSON.parse(body);
            expect(bodyData.Buckets[0].Name).to.equal('efileuploadbucket');
            done();
        });

    });
});