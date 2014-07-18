'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', function($scope) {
            $scope.navHeight = 45;
            $scope.bannerTop = 50;
            $scope.bannerBottom = 50;
            $scope.getSizes = function() {
                var myWidth = 0, myHeight = 0;
                if (typeof (window.innerWidth) === 'number') {
                    //Non-IE
                    myWidth = window.innerWidth;
                    myHeight = window.innerHeight;
                } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                    //IE 6+ in 'standards compliant mode'
                    myWidth = document.documentElement.clientWidth;
                    myHeight = document.documentElement.clientHeight;
                } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                    //IE 4 compatible
                    myWidth = document.body.clientWidth;
                    myHeight = document.body.clientHeight;
                }
                $scope.width = myWidth;
                $scope.height = myHeight;
            }
            $scope.getSizes();
            console.log($scope.height);
            var clearHeight = $scope.height - $scope.navHeight - $scope.bannerTop - $scope.bannerBottom;
            $scope.iframeHeight = clearHeight+'px';
            console.log($scope.iframeHeight);
            
            var container = angular.element(document.querySelector('#iframeContainer'));
            console.log(container);
            container.css('height',$scope.iframeHeight + 'px');
        }])
    .controller('MyCtrl1', ['$scope', function($scope) {
            $scope.random = Math.random();
        }])
    .controller('CronicasCtrl', ['$scope', '$routeParams', '$sce', function($scope, $routeParams, $sce) {
            $scope.cancha = $routeParams.cancha;
            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }
            $scope.cronicas = {
                nahuel: "https://docs.google.com/document/d/1djp1wVgEvSr542M5HzqZmBu3_0vu36NoFgIvRD5E-70/pub?embedded=true",
                talleres: "https://docs.google.com/document/d/1joQp3VuY9JU8ZZpSFoDJBGk64TG6Pn6mSIdGTnVp6S4/pub?embedded=true",
                boca: "https://docs.google.com/document/d/1AUOurFOMpgyWlsYshnCoflM_4AeB1kUAzssDNLAC6ek/pub?embedded=true",
                independiente: "https://docs.google.com/document/d/1pJuoPUzN4ZYLwH2qP5Lrbkc_-ys5WAa59-10eGe3IeM/pub?embedded=true",
                rivadavia: "https://docs.google.com/document/d/12SkwgXUtcVde3U8p4NFf5WQRwDQWkh9z8iPhjjWquwo/pub?embedded=true",
            }
            $scope.cronica = $scope.cronicas[$scope.cancha];
            console.log($scope.cronica);
            $scope.random = Math.random();
        }]);
