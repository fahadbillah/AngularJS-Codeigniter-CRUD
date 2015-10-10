'use strict';

describe('Service: authService', function () {

  // load the service's module
  beforeEach(module('ngciApp'));

  // instantiate service
  var authService;
  beforeEach(inject(function (_authService_) {
    authService = _authService_;
  }));

  it('should do something', function () {
    expect(!!authService).toBe(true);
  });

});
