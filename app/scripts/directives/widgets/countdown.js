'use strict';

angular.module('dashApp')
  .directive('widgetCountdown', ['$timeout',
    function($timeout) {
      return {
        scope: {
          data: '='
        },
        restrict: 'E',
        templateUrl: 'views/widgets/countdown.html',
        link: function(scope, element, attrs) {

          var timeoutId,
            endTimestamp = Math.round(Date.parse(scope.data.end) / 1000);

          function getSecondsLeft() {
            return Math.max(endTimestamp - Math.round(new Date().getTime() / 1000), 0);
          }

          function scheduleUpdate() {
            // save the timeoutId for canceling
            timeoutId = $timeout(function() {
              var secondsLeft = getSecondsLeft();
              scope.data.secondsLeft = secondsLeft;
              // Si le temps est écoulé on fait clignoter le temps restant
              if (secondsLeft <= 0) {
                element.find('h2').addClass('animated flash');
              } else {
                scheduleUpdate(); // schedule the next update
              }

            }, 500);
          };

          element.on('$destroy', function() {
            $timeout.cancel(timeoutId);
          });

          scope.data.secondsLeft = getSecondsLeft();
          scheduleUpdate();

        }
      };
    }
  ]);