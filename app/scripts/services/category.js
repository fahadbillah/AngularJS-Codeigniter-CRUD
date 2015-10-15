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
 			var removeParent = [];
 			data.map(function(e, i) {
 				nestedCategories.push(e);
 				if (e.parent_category !== null) {
 					data.map(function(elm, idx) {
 						if (e.parent_category == elm.category_id) {
 							removeParent[elm.category_id] = elm.category_id;
 							nestedCategories[i].parent_category = elm.category_name;
 							return false;
 						};
 					});
 				};
 			})
 			nestedCategories.map(function(e, i) {
 				removeParent.map(function(elm,idx) {
 					if (e.category_id == elm) {
 						nestedCategories.splice(i, 1);
 					};
 				})
 			})
 			console.log(nestedCategories);
 			deferred.resolve(nestedCategories);               
 		}, function(data,error) {
 			deferred.reject("Error: request returned status " + status); 
 		});

 		return deferred.promise;
 	};

 	return category;
 }]);
