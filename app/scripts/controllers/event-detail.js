'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:eventDetailCtrl
 * @description
 * # EventDetailControler
 * Controller of the matukioApp
 */

angular.module('matukioApp')
    .controller('eventDetailCtrl', ['$scope','$http', '$routeParams', 'eventDetailService', function($scope, $http, $routeParams, eventDetailService){

        eventDetailService.getEventDetail($routeParams.id)
            .success(function(data) {
                $scope.eventDetails = data[0];
        });

    }]);


