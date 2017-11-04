import * as angular from "angular";
import "angular-route";
import "bootstrap";

import navbar from "./components/navbar";
import cv from "./components/cv";
import notfound from "./components/notfound";

import "./styles/main.scss";

import "./js/ga.js";

angular
  .module("app", ["ngRoute"])
  .component("navbar", navbar)
  .component("cv", cv)
  .component("notfound", notfound)
  .config([
    "$routeProvider",
    ($routeProvider: ng.route.IRouteProvider) => {
      $routeProvider
        .when("/", {
          template: "<cv></cv>"
        })
        .when("/404", {
          template: "<notfound></notfound>"
        })
        .otherwise({
          redirectTo: "/404"
        });
    }
  ])
  .config([
    "$locationProvider",
    ($locationProvider: ng.ILocationProvider) => {
      $locationProvider.html5Mode(true);
    }
  ]);
