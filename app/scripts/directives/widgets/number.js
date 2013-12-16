'use strict';

angular.module('dashApp')
  .directive('widgetNumber', function($timeout) {
    return {
      scope: {
        data: '='
      },
      restrict: 'E',
      templateUrl: 'views/widget-number.html',
      link: function(scope, element, attrs) {

        var timeoutId;

        function scheduleUpdate() {
          // save the timeoutId for canceling
          timeoutId = $timeout(function() {
            scope.data.value = Math.floor((Math.random() * 10) + 1);
            scheduleUpdate(); // schedule the next update
          }, 1000);
        }

        element.on('$destroy', function() {
          $timeout.cancel(timeoutId);
        });

        scheduleUpdate();

      }
    };
  });