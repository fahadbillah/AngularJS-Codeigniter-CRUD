'use strict';

/**
 * @ngdoc function
 * @name ngciApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ngciApp
 */
 angular.module('ngciApp')
 .controller('LoginCtrl',['$rootScope','$scope','post','authService','$location', function ($rootScope,$scope,post,authService,$location) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.loginSubmit = function(login) {
 		$scope.inProgress = true;
 		post('auth/login',login)
 		.then(function(data) {
 			$scope.inProgress = false;
 			alert(data.message);
 			if (!!data.success) {
 				$rootScope.authService = authService;
 				$rootScope.authService.setLoginInfo(data.data);
 				$location.path('/profile');
 			};
 		}, function(data,error) {
 			$scope.inProgress = false;
 			alert(data.message);
 		});
 	};
 }]);
