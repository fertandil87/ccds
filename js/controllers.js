'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', function($scope) {
            $scope.isCollapsed = true;
            $scope.toggle = function(){
                $('#boton').click();
            };
        }])
    .controller('MyCtrl1', ['$scope', function($scope) {
            $scope.random = Math.random();
        }])
    .controller('CronicasCtrl', ['$scope', '$routeParams','$sce', function($scope, $routeParams, $sce) {
            $scope.cancha = $routeParams.cancha;
            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }
            $scope.cronicas = {
                nahuel : "https://docs.google.com/document/d/1djp1wVgEvSr542M5HzqZmBu3_0vu36NoFgIvRD5E-70/pub?embedded=true",
                talleres : "https://docs.google.com/document/d/1joQp3VuY9JU8ZZpSFoDJBGk64TG6Pn6mSIdGTnVp6S4/pub?embedded=true",
                boca : "https://docs.google.com/document/d/1AUOurFOMpgyWlsYshnCoflM_4AeB1kUAzssDNLAC6ek/pub?embedded=true",
                independiente : "https://docs.google.com/document/d/1pJuoPUzN4ZYLwH2qP5Lrbkc_-ys5WAa59-10eGe3IeM/pub?embedded=true",
                rivadavia : "https://docs.google.com/document/d/12SkwgXUtcVde3U8p4NFf5WQRwDQWkh9z8iPhjjWquwo/pub?embedded=true",
            }
            $scope.cronica = $scope.cronicas[$scope.cancha];
            console.log($scope.cronica);
            $scope.random = Math.random();
        }]);
