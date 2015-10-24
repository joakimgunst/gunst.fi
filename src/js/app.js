/// <reference path="../../bower_components/angular/angular.min.js" />

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/cv.html'
      }).
      when('/ansioluettelo', {
        templateUrl: 'partials/ansioluettelo.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
  
app.controller('navbarCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}])