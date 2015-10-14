'use strict';

/**
 * @ngdoc function
 * @name ngciApp.controller:CreateblogCtrl
 * @description
 * # CreateblogCtrl
 * Controller of the ngciApp
 */
 angular.module('ngciApp')
 .controller('CreateblogCtrl',['$scope','category','post', function ($scope,category,post) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	category.getAllCategory()
 	.then(function(data) {
 		$scope.categories = data;
 		console.log($scope.categories);
 	}, function(data,error) {
 		console.log(data);
 	});

 }]);
