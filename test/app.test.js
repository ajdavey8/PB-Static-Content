const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js')

describe('App', function() {
  it('should return status 200', function(done) {
    supertest(app)
    .get('/jobs')
    .expect(200, done);
  });

  it('should return a status code of 404', function(done) {
  supertest(app)
  .get('/randomurl')
  .expect(404, done);
  });
});
