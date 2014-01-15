'use strict';


angular.module('dashApp')
  .directive('board', ['$timeout', 'isotopeService',
    function($timeout, isotopeService) {
      return {
        scope: {
          cards: '=cards'
        },
        restrict: 'E',
        replace: true,
        templateUrl: 'views/board.html',
        transclude: true,
        link: function(scope, element) {

          // Attente du chargement du script isotope.js
          isotopeService.isotope().then(function() {

            var options = {
              animationEngine: 'best-available',
              itemSelector: '.card',
              layoutMode: 'masonry',
              sortAscending: true,
              getSortData: {
                id: function($elem) {
                  return parseInt($elem.attr('card-id'));
                }
              },
            };

            element.isotope(options);

            // Redimensionnement en cas de changement de la liste des cartes
            scope.$watch('cards.length', function() {
              $timeout(function() {
                element.isotope('reloadItems').isotope({
                  sortBy: 'id'
                });
              });
            });
          });
        },


      };
    }
  ]);