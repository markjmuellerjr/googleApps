'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var xmlsanitizerCtrlStub = {
  index: 'xmlsanitizerCtrl.index',
  show: 'xmlsanitizerCtrl.show',
  create: 'xmlsanitizerCtrl.create',
  update: 'xmlsanitizerCtrl.update',
  destroy: 'xmlsanitizerCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var xmlsanitizerIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './xmlsanitizer.controller': xmlsanitizerCtrlStub
});

describe('Xmlsanitizer API Router:', function() {

  it('should return an express router instance', function() {
    xmlsanitizerIndex.should.equal(routerStub);
  });

  describe('GET /api/xmlsanitizers', function() {

    it('should route to xmlsanitizer.controller.index', function() {
      routerStub.get
        .withArgs('/', 'xmlsanitizerCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/xmlsanitizers/:id', function() {

    it('should route to xmlsanitizer.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'xmlsanitizerCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/xmlsanitizers', function() {

    it('should route to xmlsanitizer.controller.create', function() {
      routerStub.post
        .withArgs('/', 'xmlsanitizerCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/xmlsanitizers/:id', function() {

    it('should route to xmlsanitizer.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'xmlsanitizerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/xmlsanitizers/:id', function() {

    it('should route to xmlsanitizer.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'xmlsanitizerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/xmlsanitizers/:id', function() {

    it('should route to xmlsanitizer.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'xmlsanitizerCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
