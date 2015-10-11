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
    controller: 'ProfileCtrl',
    resolve: {
      // I will cause a 1 second delay
      delay: function($q, $timeout, authService) {
        var delay = $q.defer();
        console.log(authService.isAuthenticated());
        if(!authService.isAuthenticated()){
          console.log('not authorized');
        }else{
          console.log('ok');
        }
        $timeout(delay.resolve, 1000);
        return delay.promise;
      }
    }
  })
  .when('/logout', {
    templateUrl: 'views/logout.html',
    controller: 'LogoutCtrl'
  })
  .when('/logout/:status', {
    templateUrl: 'views/logout.html',
    controller: 'LogoutCtrl'
  })
  .otherwise({
    redirectTo: '/error/404'
  });
});
