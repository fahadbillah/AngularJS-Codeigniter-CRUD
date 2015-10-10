'use strict';

describe('Service: helper', function () {

  // load the service's module
  beforeEach(module('ngciApp'));

  // instantiate service
  var helper;
  beforeEach(inject(function (_helper_) {
    helper = _helper_;
  }));

  it('should do something', function () {
    expect(!!helper).toBe(true);
  });

});
