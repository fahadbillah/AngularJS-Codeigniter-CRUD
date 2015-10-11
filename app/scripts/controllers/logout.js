'use strict';

/**
 * @ngdoc function
 * @name ngciApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the ngciApp
 */
 angular.module('ngciApp')
 .controller('LogoutCtrl',['$scope','get','authService','$location','$routeParams', function ($scope,get,authService,$location,$routeParams) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.message = $routeParams.status || '';
 	get('auth/logout')
 	.then(function(data) {
 		console.log(data);
 		if(!!data.success){
 			authService.logout();
 			$location.path('/logout/Logout Successfully!')
 		}else{
 			$scope.message = 'Logout failed!';
 		}
 	}, function(data,error) {
 		console.log(data);
 	});
 }]);
