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

            // Calcul de la valeur du temps restant
            function setCountdown() {
              var secondsUntilEnd = endTimestamp - Math.round(new Date().getTime() / 1000);
              if (secondsUntilEnd < 0) {
                return("TIME UP !");
                // for (var i = 0; i < 100; i++) {
                //   element.fadeTo('fast', 0).fadeTo('fast', 1.0)
                // }
              } else {
                
                var d = Math.floor(secondsUntilEnd / 86400),
                  h = Math.floor((secondsUntilEnd - (d * 86400)) / 3600),
                  m = Math.floor((secondsUntilEnd - (d * 86400) - (h * 3600)) / 60),
                  s = secondsUntilEnd - (d * 86400) - (h * 3600) - (m * 60),
                  dayname = '';

                if (d > 0) {
                  dayname = 'day';
                  if (d > 1) {
                    dayname = 'days';
                  }
                  return (d + " " + dayname + " " + formatTime(h) + ":" + formatTime(m) + ":" + formatTime(s));
              } else {
                return(formatTime(h) + ":" + formatTime(m) + ":" + formatTime(s));

            }

          };
        }

        function formatTime(i) {
          if (i < 10) {
            return ("0" + i);
          } else {
            return (i);

          }

        }

        function scheduleUpdate() {
          // save the timeoutId for canceling
          timeoutId = $timeout(function() {
            scope.data.timeleft=setCountdown();
            scheduleUpdate(); // schedule the next update
          }, 1000);
        };

        element.on('$destroy', function() {
          $timeout.cancel(timeoutId);
        });

        scope.data.timeleft=setCountdown();
        scheduleUpdate();

      }
    };
}
  ]);