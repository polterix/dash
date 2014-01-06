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
        link: function(scope, element, attrs) {
          
          // Attente du chargement du script isotope.js
          isotopeService.isotope().then(function(isotope) {

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

            // Redimensionnement en cas de changement de la liste des cartes
            scope.$watch('cards.length', function() {
              $timeout(function() {
                element.isotope('reloadItems').isotope({
                  sortBy: 'id'
                });
              });
            });

          });
        }
      };
    }
  ]);