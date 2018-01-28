const supertest = require('supertest');
const should = require('chai').should();
const expect = require('chai').expect;
const app = require('../index.js')

describe('App', function() {
  it('should return status 200', function(done) {
    supertest(app)
    .get('/jobs')
    .expect(200, done);
  });
});
