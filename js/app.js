'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cronicas', {templateUrl: 'partials/cronicas.html', controller: 'MyCtrl1'});
  $routeProvider.when('/amolestados', {templateUrl: 'partials/amolestados.html', controller: 'MyCtrl1'});
  $routeProvider.when('/resultados', {templateUrl: 'partials/resultados.html', controller: 'MyCtrl1'});
  $routeProvider.when('/posiciones', {templateUrl: 'partials/posiciones.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/posiciones'});
}]);
