'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the matukioApp
 */
angular.module('matukioApp')
  .controller('EventDetailCtrl', function ($scope, $routeParams) {
        $scope.eventid = $routeParams.eventId;
  });
