'use strict';

angular.module('dashApp')
  .directive('widgetText', function($timeout) {
    return {
      scope: {
        data: '='
      },
      restrict: 'E',
      templateUrl: 'views/widgets/text.html',
      link: function(scope, element, attrs) {

      }
    };
  });