'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:eventDetailCtrl
 * @description
 * # EventDetailControler
 * Controller of the matukioApp
 */

angular.module('matukioApp')
    .controller('eventDetailCtrl', ['$scope','$http', '$routeParams', function($scope, $http,$routeParams){
        $http.get('scripts/data.json').success (function(data){

            $scope.eventid = $routeParams.id;

            angular.forEach(data, function(event) {
                console.log(event);
                if($scope.eventid === event.nid){
                    $scope.eventDetails = event;
                }
            });
        });
    }]
 );


