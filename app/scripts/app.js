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
 .config(['$routeProvider', function ($routeProvider) {
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
     controller: 'LoginCtrl',
     resolve: {
      load: function($q, $rootScope, $timeout, authService) {
       var load = $q.defer();
       if(authService.isAuthenticated()){
        load.reject('not_accessible_by_already_logged_in');
      }else{
        load.resolve();
      }
      return load.promise;
    }
  }
})
   .when('/login/:message', {
     templateUrl: 'views/login.html',
     controller: 'LoginCtrl',
     resolve: {
      load: function($q, $rootScope, $timeout, authService) {
       var load = $q.defer();
       if(authService.isAuthenticated()){
        load.reject('not_accessible_by_already_logged_in');
      }else{
        load.resolve();
      }
      return load.promise;
    }
  }
})
   .when('/error/:errorId', {
     templateUrl: 'views/error.html',
     controller: 'ErrorCtrl'
   })
   .when('/registration', {
     templateUrl: 'views/registration.html',
     controller: 'RegistrationCtrl',
     resolve: {
      load: function($q, $rootScope, $timeout, authService) {
       var load = $q.defer();
       if(authService.isAuthenticated()){
        load.reject('not_accessible_by_already_logged_in');
      }else{
        load.resolve();
      }
      return load.promise;
    }
  }
})
   .when('/profile', {
     templateUrl: 'views/profile.html',
     controller: 'ProfileCtrl',
     resolve: {
      // access control
      load: function($q, $rootScope, $timeout, authService) {
       var load = $q.defer();
       console.log($rootScope);
       if(!authService.isAuthenticated()){
        load.reject('not_authenticated');
      }else{
        load.resolve();
      }
      // $timeout(load.resolve, 2000);
      return load.promise;
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
 }]);
