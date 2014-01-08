'use strict';

angular.module('dashApp')
  .directive('widget', ['$compile',
    function($compile) {
      return {
        scope: {
          data: '='
        },
        restrict: 'E',
        controller: function($scope, $element) {
          if ($scope.data.type === undefined) {
            $scope.data.type = 'text';
          }

          var st = $element[0].outerHTML.replace(/widget/g, 'widget-' + $scope.data.type) + 
                  '<div class="card-type">{{data.type}}</div>';
          var el = $compile(st)($scope);
          $element.replaceWith(el);
        }
      };
    }
  ]);