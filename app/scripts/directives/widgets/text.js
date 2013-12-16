'use strict';

angular.module('dashApp')
  .directive('widgetText', function($timeout) {
    return {
      scope: {
        data: '='
      },
      restrict: 'E',
      templateUrl: 'views/widget-text.html',
      link: function(scope, element, attrs) {

      }
    };
  });