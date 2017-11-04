import * as angular from "angular";
import "angular-route";

import navbar from "./components/navbar";
import cv from "./components/cv";

// import "./bootstrap-custom/css/bootstrap.css";

import "bootstrap/scss/bootstrap.scss";
//import "./less/main.less";
//import "./less/print.less";

angular
  .module("app", ["ngRoute"])
  .component("navbar", navbar)
  .component("cv", cv);

// .config([
//   "$routeProvider",
//   function($routeProvider: ng.route.IRouteProvider) {
//     $routeProvider
//       .when("/", {
//         templateUrl: "partials/cv.html"
//       })
//       .otherwise({
//         redirectTo: "/"
//       });
//   }
// ])
// .controller("navbarCtrl", [
//   "$scope",
//   "$location",
//   function($scope, $location: ng.ILocationService) {
//     $scope.isActive = viewLocation => viewLocation === $location.path();
//   }
// ]);
