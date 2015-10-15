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

 	$scope.blog = {
 		tags : [],
 		category: null
 	};

 	category.getAllCategory()
 	.then(function(data) {
 		$scope.categories = data;
 		console.log($scope.categories);
 	}, function(data,error) {
 		console.log(data);
 	});

 	$scope.createTag = function (tags) {
 		$scope.blog.tags = [];
 		var tag = tags.split(',');
 		console.log(tags)
 		tag.map(function (e,i) {
 			$scope.blog.tags.push(e.trim());
 		})
 	}

 }]);
