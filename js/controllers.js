'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
          $scope.random = Math.random();
  }])
  .controller('CronicasCtrl', ['$scope', function($scope) {

          $scope.random = Math.random();
  }]);
