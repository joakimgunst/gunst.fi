import * as angular from "angular";

import navbar from "./components/navbar";
import cv from "./components/cv";

import "bootstrap/scss/bootstrap.scss";
import "./app.scss";

import "./js/ga.js";

angular
  .module("app", [])
  .component("navbar", navbar)
  .component("cv", cv);