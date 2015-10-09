'use strict';

/**
 * @ngdoc function
 * @name ngciApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngciApp
 */
angular.module('ngciApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
