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
 			$rootScope.$on('$routeChangeSuccess', function(event,current) {
 				if ('#'+current.$$route.originalPath === element.children().attr('ng-href')) {
 					attrs.$addClass('active');
 				}else{
 					attrs.$removeClass('active');
 				}
 			});
 		}
 	};
 }])
/**
 * @ngdoc directive
 * @name ngciApp.directive:vs
 * @description
 * # navMenu
 */
 .directive('restrict', ['$rootScope','authService', function ($rootScope,authService) {
 	return {
 		restrict: 'A',
 		link: function postLink(scope, element, attrs) {
 			$rootScope.$on('$routeChangeSuccess', function(event,current) {
 				switch(attrs.restrict){
 					case 'public':
 					if (authService.isAuthenticated()) {
 						element.hide();
 					}else{
 						element.show();
 					}
 					break;
 					case 'auth':
 					if (authService.isAuthenticated()) {
 						element.show();
 					}else{
 						element.hide();
 					}
 					break;
 				}
 			});
 		}
 	};
 }])
