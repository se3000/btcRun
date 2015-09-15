btcRun = angular.module('btcRun', ['ui.router']);

btcRun.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      template: "hello world"
    });
}]);
