'use strict';

angular.module('dashApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angularCharts',
  'btford.socket-io',
  'angularMoment',
  'isotope'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.factory('socket', function(socketFactory) {

  return socketFactory({
    ioSocket: io.connect('http://127.0.0.1:80/')
  });

});