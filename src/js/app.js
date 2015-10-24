
// Boostrap requires jQuery to be defined globally
window.jQuery = require('jquery')
var bootstrap = require('bootstrap');
var angular = require('angular');

var app = angular.module('app', [ require('angular-route') ]);

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
  $scope.isActive = viewLocation => viewLocation === $location.path();
}])