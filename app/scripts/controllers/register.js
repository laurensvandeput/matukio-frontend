'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:eventDetailCtrl
 * @description
 * # EventDetailControler
 * Controller of the matukioApp
 */

angular.module('matukioApp')
  .controller('userRegisterCtrl', ['$scope','$http', '$routeParams', 'registerService', function($scope, $http, $routeParams, registerService){

    $scope.submit = function() {

      registerService.registerUser($routeParams.id, $scope.username)
        .success(function(data) {
          $scope.eventDetails = data[0];
        });

    };

    $scope.unregister = function(elem) {

      console.log(elem);
      // TODO
      //registerService.unregister($routeParams.id, $elem)

    }

  }]);


