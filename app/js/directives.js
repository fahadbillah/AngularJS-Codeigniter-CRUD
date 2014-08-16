'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
}])
.directive('menu', ['headerFooterData', function(headerFooterData) {
	return {
		restrict: 'A',
		templateUrl: 'partials/menu.html',
		controller: function($scope,headerFooterData) {
			headerFooterData.getHeaderFooterData().then(function(data) {
				console.log(data);
				$scope.nav = data.menu;
			});
		}
	};
}]);
