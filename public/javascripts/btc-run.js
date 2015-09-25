btcRun = angular.module('btcRun', ['ui.router']);

btcRun.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      controller: 'homeController',
      templateUrl: "home.html"
    });
}]);

btcRun.controller('homeController', ['$scope', function ($scope) {
}]);
