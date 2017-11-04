import * as angular from "angular";
import "bootstrap";

import navbar from "./components/navbar";
import cv from "./components/cv";

import "./styles/main.scss";

import "./js/ga.js";

angular
  .module("app", [])
  .component("navbar", navbar)
  .component("cv", cv);