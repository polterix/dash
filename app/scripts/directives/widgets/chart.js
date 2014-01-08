'use strict';

angular.module('dashApp')
  .directive('widgetChart', ['$timeout',function($timeout) {
    return {
      scope: {
        data: '='
      },
      restrict: 'E',
      templateUrl: 'views/widgets/chart.html',
      link: function(scope, element, attrs) {

      }
    };
  }]);