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

  it('should return jobs html', function(done) {
    supertest(app)
    .get('/jobs')
    .end(function(err,res){
      expect(res.text).to.contain('<h1 id="jobs-at-acme-co-">Jobs at Acme Co.</h1>');
      done();
    });
  });
});
