'use strict';

describe('Component: XmlsanitizerComponent', function () {

  // load the controller's module
  beforeEach(module('googleAppsApp'));

  var XmlsanitizerComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    XmlsanitizerComponent = $componentController('XmlsanitizerComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
