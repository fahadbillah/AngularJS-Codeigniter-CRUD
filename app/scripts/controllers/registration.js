'use strict';

/**
 * @ngdoc function
 * @name ngciApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the ngciApp
 */
 angular.module('ngciApp')
 .controller('RegistrationCtrl',['$scope','post', function ($scope,post) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.registrationSubmit = function(registration) {
 		$scope.inProgress = true;
 		post('auth/registration', registration)
 		.then(function(data) {
 			$scope.inProgress = false;
 			console.log(data); 			
 		}, function(data,error) {
 			$scope.inProgress = false;
 			console.log(data); 			
 		});
 	};
 }]);
