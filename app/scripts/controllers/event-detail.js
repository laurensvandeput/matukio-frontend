'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:eventDetailCtrl
 * @description
 * # EventDetailControler
 * Controller of the matukioApp
 */

angular.module('matukioApp')
    .controller('eventDetailCtrl', ['$scope','$http', function($scope, $http,$routeParams){
        $http.get('scripts/data.json').success (function(data){

            console.log('json call win!');
            $scope.eventid = $routeParams.eventId;

            angular.forEach(data.events, function(event) {

                if($scope.eventid === data.eventid){
                    $scope.eventDetails = event;
                }
            });
        });
    }]
 );
