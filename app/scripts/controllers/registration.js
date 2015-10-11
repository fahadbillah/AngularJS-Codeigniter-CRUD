'use strict';

/**
 * @ngdoc function
 * @name ngciApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the ngciApp
 */
 angular.module('ngciApp')
 .controller('RegistrationCtrl',['$scope','post','get', function ($scope,post,get) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	get('auth/')
 	.then(function(data) {
 		console.log(data);
 	})

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
