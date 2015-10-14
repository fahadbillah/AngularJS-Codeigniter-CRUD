'use strict';

describe('Controller: CreateblogCtrl', function () {

  // load the controller's module
  beforeEach(module('ngciApp'));

  var CreateblogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateblogCtrl = $controller('CreateblogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
