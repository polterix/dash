'use strict';

angular.module('dashApp')
  .directive('widgetJauge', function($timeout) {
    return {
      scope: {
        data: '='
      },
      restrict: 'E',
      templateUrl: 'views/widgets/jauge.html',
      link: function(scope, element, attrs) {

      }
    };
  });