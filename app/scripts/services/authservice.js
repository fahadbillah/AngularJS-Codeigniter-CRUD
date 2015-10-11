'use strict';

/**
 * @ngdoc service
 * @name ngciApp.authService
 * @description
 * # authService
 * Service in the ngciApp.
 */
 angular.module('ngciApp')
 .service('authService',['$window', 'session', function ($window, session) {
 	var authService = {};

 	authService.setLoginInfo = function(data) {
 		session.create(data);
 		$window.sessionStorage['user'] = JSON.stringify(data);
 	}

 	authService.logout = function() {
 		session.destroy();
 		$window.sessionStorage.removeItem('user');
 	}

 	authService.isAuthenticated = function () {
 		return !!session.user;
 	};

 	authService.isAuthorized = function (authorizedRoles) {
 		if (!angular.isArray(authorizedRoles)) {
 			authorizedRoles = [authorizedRoles];
 		}
 		return (authService.isAuthenticated() && authorizedRoles.indexOf(session.userRole) !== -1);
 	};

 	function init () {
 		if ($window.sessionStorage['user']) {
 			session.create(JSON.parse($window.sessionStorage['user']));
 		}
 	}
 	init();

 	return authService;
 }]);
