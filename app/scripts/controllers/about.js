'use strict';

/**
 * @ngdoc function
 * @name ngciApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngciApp
 */
angular.module('ngciApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
