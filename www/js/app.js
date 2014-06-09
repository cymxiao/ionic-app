(function () {
  "use strict";

  var app = angular.module('app', [
    'ionic',
    'app.services',
    'app.factories',
    'app.controllers'
  ]);

  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('loading-screen', {
          url: "/",
          templateUrl: "./templates/loading-screen.html",
          controller: 'LoadingScreenCtrl'
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/');

    }
  ]);

  app.run([
    '$rootScope',
    '$window',
    '$ionicPlatform',
    function ($rootScope, $window, $ionicPlatform) {
      $ionicPlatform.ready(function () {
        if ($window.StatusBar) {
          StatusBar.styleDefault();
        }
        console.log("Ionic is ready.");
      });

      $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
        console.log("stateChangeError:");
        console.log(error);
      });

      $rootScope.$on("$stateNotFound", function (event, unfoundState, fromState) {
        console.log("stateNotFound:");
        console.log(unfoundState);
        console.log(fromState);
      });
    }
  ]);

})();
