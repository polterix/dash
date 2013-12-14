'use strict';

angular.module('dashApp')
  .controller('MainCtrl', function ($scope,$http) {

    $http.get('data/cards.json').
      success(function(data) {
        $scope.cards = data;
      });

  $scope.hello = "Hello";  
    $scope.addCard = function (){
      var id = Math.floor((Math.random()*10)+1);
      $scope.cards.push({"id":id,"title":"Test " + id});
    };
    
    $scope.removeCard = function (){
      $scope.cards.pop();
    };


  });