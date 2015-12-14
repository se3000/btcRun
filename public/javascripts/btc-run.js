bitcore = require('bitcore');
btcRun = angular.module('btcRun', ['ui.router']);

btcRun.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      controller: 'homeController',
      templateUrl: "home.html",
      url: "/"
    });
}]);

btcRun.controller('homeController', ['$scope', function ($scope) {
  var key = new bitcore.PrivateKey();
  $scope.privateKey = key.toString();
  $scope.publicKey = key.publicKey.toString();
  $scope.address = key.toAddress().toString();
}]);
