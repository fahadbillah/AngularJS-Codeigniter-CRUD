'use strict';

/**
 * @ngdoc function
 * @name ngciApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the ngciApp
 */
angular.module('ngciApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
