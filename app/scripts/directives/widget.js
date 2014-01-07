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

          // TODO : REMPLACER data="card" par data="data" 
          var st = $element[0].outerHTML.replace(/widget/g, 'widget-' + $scope.data.type);
          var el = $compile(st)($scope);
          $element.replaceWith(el);
        }
      };
    }
  ]);