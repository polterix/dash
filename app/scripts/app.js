'use strict';

angular.module('dashApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angularCharts',
  'isotope'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
