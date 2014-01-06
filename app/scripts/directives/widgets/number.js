'use strict';

angular.module('dashApp')
  .directive('widgetNumber', ['$timeout',function($timeout) {
    return {
      scope: {
        data: '='
      },
      restrict: 'E',
      templateUrl: 'views/widgets/number.html',
      link: function(scope, element, attrs) {

        var timeoutId;

        function scheduleUpdate() {
          // save the timeoutId for canceling
          timeoutId = $timeout(function() {
            scope.data.value = Math.floor((Math.random() * 1000) + 1);
            scheduleUpdate(); // schedule the next update
          }, Math.floor((Math.random() * 1500) + 100));
        }

        element.on('$destroy', function() {
          $timeout.cancel(timeoutId);
        });

        scheduleUpdate();

      }
    };
  }]);