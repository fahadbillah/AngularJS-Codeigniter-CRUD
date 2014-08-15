'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
	]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
	$routeProvider.when('/registration', {templateUrl: 'partials/registration.html', controller: 'RegistrationCtrl'});
	$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
	$routeProvider.when('/logout', {templateUrl: 'partials/logout.html', controller: 'LogoutCtrl'});
	$routeProvider.when('/newpost', {templateUrl: 'partials/newpost.html', controller: 'NewPostCtrl'});
	$routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'});
	$routeProvider.when('/post/:id_posts', {templateUrl: 'partials/post.html', controller: 'PostCtrl'});
	$routeProvider.otherwise({redirectTo: '/login'});
}]);
