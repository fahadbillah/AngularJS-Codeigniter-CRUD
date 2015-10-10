'use strict';

/**
 * @ngdoc service
 * @name ngciApp.post
 * @description
 * # post
 * Service in the ngciApp.
 */
 angular.module('ngciApp')
 .service('post',['$http', '$q', '$cookies', function ($http, $q, $cookies) {
 	return function(url,data) {
 		var deferred = $q.defer();
 		data.csrf_test_name = $cookies.get('csrf_cookie_name');
 		$http({
 			url: 'api/index.php/'+url,
 			method: 'post',
 			data: $.param(data),
 			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
 		})
 		.success(function(data){
 			deferred.resolve(data);               
 		})
 		.error(function(data, status, headers, config) {
 			deferred.reject("Error: request returned status " + status); 
 		});
 		return deferred.promise;
 	};
 }]);
