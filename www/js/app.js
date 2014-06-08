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
    '$window',
    '$ionicPlatform',
    function ($window, $ionicPlatform) {
      $ionicPlatform.ready(function () {
        if ($window.StatusBar) {
          StatusBar.styleDefault();
        }
        console.log("Ionic is ready.");
      });
    }
  ]);

})();
