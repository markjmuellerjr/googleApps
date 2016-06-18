'use strict';

var app = require('../..');
import request from 'supertest';

var newXmlsanitizer;

describe('Xmlsanitizer API:', function() {

  describe('GET /api/xmlsanitizers', function() {
    var xmlsanitizers;

    beforeEach(function(done) {
      request(app)
        .get('/api/xmlsanitizers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          xmlsanitizers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      xmlsanitizers.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/xmlsanitizers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/xmlsanitizers')
        .send({
          name: 'New Xmlsanitizer',
          info: 'This is the brand new xmlsanitizer!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newXmlsanitizer = res.body;
          done();
        });
    });

    it('should respond with the newly created xmlsanitizer', function() {
      newXmlsanitizer.name.should.equal('New Xmlsanitizer');
      newXmlsanitizer.info.should.equal('This is the brand new xmlsanitizer!!!');
    });

  });

  describe('GET /api/xmlsanitizers/:id', function() {
    var xmlsanitizer;

    beforeEach(function(done) {
      request(app)
        .get('/api/xmlsanitizers/' + newXmlsanitizer._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          xmlsanitizer = res.body;
          done();
        });
    });

    afterEach(function() {
      xmlsanitizer = {};
    });

    it('should respond with the requested xmlsanitizer', function() {
      xmlsanitizer.name.should.equal('New Xmlsanitizer');
      xmlsanitizer.info.should.equal('This is the brand new xmlsanitizer!!!');
    });

  });

  describe('PUT /api/xmlsanitizers/:id', function() {
    var updatedXmlsanitizer;

    beforeEach(function(done) {
      request(app)
        .put('/api/xmlsanitizers/' + newXmlsanitizer._id)
        .send({
          name: 'Updated Xmlsanitizer',
          info: 'This is the updated xmlsanitizer!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedXmlsanitizer = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedXmlsanitizer = {};
    });

    it('should respond with the updated xmlsanitizer', function() {
      updatedXmlsanitizer.name.should.equal('Updated Xmlsanitizer');
      updatedXmlsanitizer.info.should.equal('This is the updated xmlsanitizer!!!');
    });

  });

  describe('DELETE /api/xmlsanitizers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/xmlsanitizers/' + newXmlsanitizer._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when xmlsanitizer does not exist', function(done) {
      request(app)
        .delete('/api/xmlsanitizers/' + newXmlsanitizer._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
