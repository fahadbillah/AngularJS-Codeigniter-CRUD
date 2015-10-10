'use strict';

/**
 * @ngdoc overview
 * @name ngciApp
 * @description
 * # ngciApp
 *
 * Main module of the application.
 */
 angular
 .module('ngciApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .when('/error/:errorId', {
    templateUrl: 'views/error.html',
    controller: 'ErrorCtrl'
  })
  .when('/registration', {
    templateUrl: 'views/registration.html',
    controller: 'RegistrationCtrl'
  })
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileCtrl'
  })
  .otherwise({
    redirectTo: '/error/404'
  });
});
