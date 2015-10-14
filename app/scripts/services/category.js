'use strict';

/**
 * @ngdoc service
 * @name ngciApp.category
 * @description
 * # category
 * Service in the ngciApp.
 */
 angular.module('ngciApp')
 .service('category',['$q', 'get', function ($q, get) {
 	var category = {};

 	category.getAllCategory = function() {
 		var deferred = $q.defer();

 		get('blog/get_all_categories')
 		.then(function(data) {
 			var nestedCategories = [];
 			data.map(function(e, i) {
 				console.log(e)
 				nestedCategories.push(e);
 				if (e.parent_category !== null) {
 					data.find(function(elm, idx) {
 						
 					});
 				};
 			})
 			// angular.forEach(data, function(e, i){

 			// });
 		deferred.resolve(data);               
 	}, function(data,error) {
 		deferred.reject("Error: request returned status " + status); 
 	});

 		return deferred.promise;
 	};

 	return category;
 }]);
