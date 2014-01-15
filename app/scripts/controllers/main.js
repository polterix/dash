'use strict';

angular.module('dashApp')
  .controller('MainCtrl', function($scope, $http, socket) {

    $http.get('data/cards.json').
    success(function(data) {
      $scope.cards = data;
    });

    $scope.addCard = function() {
      var types = new Array('text', 'jauge', 'number', 'chart'),
        numbers = new Array(1, 1, 1, 2, 2),
        id = Math.floor((Math.random() * 10) + 1),
        width = numbers[Math.floor((Math.random() * types.length) + 1)],
        height = numbers[Math.floor((Math.random() * types.length) + 1)],
        type = types[Math.floor((Math.random() * types.length) + 1)];
      $scope.cards.push({
        'id': id,
        'title': 'Test ' + id,
        'width': width,
        'type': type,
        'height': height
      });
    };

    $scope.removeCard = function() {
      $scope.cards.pop();
    };

    socket.on('news', function(data) {
      console.log(data.hello);
    });


  });