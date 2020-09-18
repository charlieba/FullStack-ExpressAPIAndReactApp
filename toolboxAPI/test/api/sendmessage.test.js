var app = require('../../app');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('Endpoint Text', function() {
  it('Should return the same text that is sended', function(done) {
    request(app)
      .post('/text')
      .send({message:"Texto a enviar"})
      .end(function(err, res) {
        expect(res.body.message).equal("Texto a enviar");
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});

describe('Endpoint does not extis', function() {
  it('Should return a status 404', function(done) {
    request(app)
      .post('/text1')
      .send({message:"Este es un texto"})
      .end(function(err, res) {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
});

describe('Bad Parameters - Bad request', function() {
  it('Should return a status 400', function(done) {
    request(app)
      .post('/text')
      .send({message1:"Este es un texto"})
      .end(function(err, res) {
        expect(res.statusCode).to.deep.equals(400);
        done();
      });
  });
});

describe('GET - Request different to post', function() {
  it('Should return a status 404', function(done) {
    request(app)
      .get('/text')
      .send({message:"Este es un texto"})
      .end(function(err, res) {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
});

describe('PUT - Request different to post', function() {
  it('Should return a status 404', function(done) {
    request(app)
      .put('/text')
      .send({message:"Este es un texto"})
      .end(function(err, res) {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
});

describe('DELETE - Request different to post', function() {
  it('Should return a status 404', function(done) {
    request(app)
      .delete('/text')
      .send({message:"Este es un texto"})
      .end(function(err, res) {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
});

describe('PATCH - Request different to post', function() {
  it('Should return a status 404', function(done) {
    request(app)
      .patch('/text')
      .send({message:"Este es un texto"})
      .end(function(err, res) {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
});