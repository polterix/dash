'use strict';

angular.module('dashApp')
  .controller('MainCtrl', function($scope, $http) {

    $http.get('data/cards.json').
    success(function(data) {
      $scope.cards = data;
    });

    $scope.addCard = function() {
      var id = Math.floor((Math.random() * 10) + 1);
      var width = Math.floor((Math.random() * 2) + 1);
      var height = Math.floor((Math.random() * 2) + 1);
      $scope.cards.push({
        "id": id,
        "title": "Test " + id,
        "width": width,
        "height": height
      });
    };

    $scope.removeCard = function() {
      $scope.cards.pop();
    };
  });