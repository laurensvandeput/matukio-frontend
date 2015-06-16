'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the matukioApp
 */
angular.module('matukioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('matukioApp')
    .factory('eventsService',['$http', function($http) {
        return {
            getEventsOverview: function() {
               return $http.get('http://tuk.io/events').success(function(data){
                    return data;
                });
            }
        };
    }]);

angular.module('matukioApp')
    .controller('EventOverviewCtrl',[ '$scope', 'eventsService', function ($scope, eventsService) {

        eventsService.getEventsOverview()
            .success(function(data) {
                $scope.events = data;

        });

    }]);





