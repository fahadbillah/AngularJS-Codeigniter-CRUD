'use strict';

/**
 * @ngdoc directive
 * @name ngciApp.directive:navMenu
 * @description
 * # navMenu
 */
 angular.module('ngciApp')
 .directive('navMenu', ['$rootScope', function ($rootScope) {
 	return {
 		restrict: 'A',
 		link: function postLink(scope, element, attrs) {
 			$rootScope.$on('$routeChangeSuccess', function(event,current,previous) {
 				if ('#'+current.$$route.originalPath === element.children().attr('ng-href')) {
 					attrs.$addClass('active')
 				}else{
 					attrs.$removeClass('active')
 				}
 			});
 		}
 	};
 }]);
