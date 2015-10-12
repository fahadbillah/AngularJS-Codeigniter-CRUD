'use strict';

/**
 * @ngdoc function
 * @name ngciApp.controller:DocumentCtrl
 * @description
 * # DocumentCtrl
 * Controller of the ngciApp
 */
 angular.module('ngciApp')
 .controller('DocumentCtrl',['$rootScope','$scope','$location','get', function ($rootScope, $scope, $location, get) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	// loading csrf cookie from ci backend
 	get('auth/')
 	.then(function(data) {
 		console.log(data);
 	})

 	$scope.pageLoader = {
 		show: false,
 		message: ''
 	};

 	$rootScope.showPageLoader = function(message) {
 		$scope.pageLoader = {
 			show: true,
 			message: message || 'Loading'
 		};
 	};

 	$rootScope.hidePageLoader = function() {
 		$scope.pageLoader = {
 			show: false,
 			message: ''
 		};
 	};

 	$scope.$on('$routeChangeStart', function(evt){
 		$rootScope.showPageLoader('Loading...');
 	});
 	$scope.$on('$routeChangeSuccess', function(evt){
 		$rootScope.hidePageLoader();
 	});
 	$scope.$on('$routeChangeError', function(evt,current,previous,rejection) {
 		$rootScope.hidePageLoader();
 		switch(rejection){
 			case 'not_authenticated':
 			$location.path('/login/Please login to access this page')
 			break;
 			case 'not_authorized':
 			$location.path('/error/403')
 			break;
 			case 'not_accessible_by_already_logged_in':
 			$location.path(previous.$$route.originalPath)
 			break;
 		}
 	});
 }]);
