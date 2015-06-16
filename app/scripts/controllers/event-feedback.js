'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:eventFeedbackCtrl
 * @description
 * # eventFeedbackControler
 * Controller of the matukioApp
 */

angular.module('matukioApp')
  .controller('eventFeedbackCtrl', ['$scope','$http', '$routeParams', 'feedbackService', function($scope, $http, $routeParams, feedbackService){

    feedbackService.getFeedback('event', $routeParams.id)
      .success(function (data) {
        $scope.feedback = data;
      })

  }]);


