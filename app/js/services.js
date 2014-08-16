'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.factory('headerFooterData', ['$http', '$q',
	function($http, $q) {
		return {
			getHeaderFooterData: function(type) {
				var deferred = $q.defer();
				$http.get('/ngci/app/api/menus/').success(function(data) {
					deferred.resolve(data);
				}).error(function() {
					deferred.reject();
				});
				return deferred.promise;
			}
		};
	}])
.value('version', '0.1');
