'use strict';

/**
 * @ngdoc function
 * @name ngciApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the ngciApp
 */
 angular.module('ngciApp')
 .controller('RegistrationCtrl',['$scope', function ($scope) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.registrationSubmit = function(registration) {
 		console.log(registration);
 	};
 }]);
