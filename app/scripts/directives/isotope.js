'use strict';

angular.module('dashApp')
  .directive('isotope', function($timeout) {
    return {
      scope: {
        items: '=isotope'
      },
      restrict: 'A',
      templateUrl: 'views/isotope.html',
      link: function(scope, element, attrs) {

        var options = {
          animationEngine: 'best-available',
          itemSelector: 'section',
          layoutMode: 'masonry',
          sortAscending: true,
          getSortData: {
            id: function($elem) {
              return parseInt($elem.attr('card-id'));
            }
          },
        };
        element.isotope(options);

        scope.$watch('items.length', function() {
          $timeout(function() {
            element.isotope('reloadItems').isotope({
              sortBy: 'id'
            });
          });
        });

      }
    };
  });