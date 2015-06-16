'use strict';

/**
 * @ngdoc overview
 * @name matukioApp
 * @description
 * # matukioApp
 *
 * Main module of the application.
 */
angular
  .module('matukioApp', [
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
      .when('/event-detail/:id', {
            templateUrl: 'views/event-detail.html',
            controller: 'eventDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
