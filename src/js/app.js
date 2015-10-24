var angular = require('angular');

angular.module('app', [ require('angular-route') ])
  .config(['$routeProvider',
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
    }])
  .controller('navbarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = viewLocation => viewLocation === $location.path();
  }])