'use strict';

angular.module('myappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user', {
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      });
  });
