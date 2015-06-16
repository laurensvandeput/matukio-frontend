'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:eventFeedbackCtrl
 * @description
 * # eventFeedbackControler
 * Controller of the matukioApp
 */

angular.module('matukioApp')
  .controller('assetFeedbackCtrl', ['$scope', '$http', '$routeParams', 'feedbackService', function ($scope, $http, $routeParams, feedbackService) {

    feedbackService.getFeedback('asset', $routeParams.id)
      .success(function (data) {
        $scope.feedback = data;
      })

  }])
  .controller('eventFeedbackCtrl', ['$scope', '$http', '$routeParams', 'feedbackService', function ($scope, $http, $routeParams, feedbackService) {

    feedbackService.getFeedback('event', $routeParams.id)
      .success(function (data) {
        $scope.feedback = data;
      })

  }])
  .controller('feedbackPosterCtrl', ['$scope', '$http', '$routeParams', 'feedbackService', function ($scope, $http, $routeParams, feedbackService) {

    $scope.submit = function () {
      feedbackService.postFeedback('asset', $routeParams.id, $scope.username, $scope.feedback, $scope.rating);
      $scope.feedback = '';
      $scope.rating = '';
      $scope.username = '';
    }

  }]);


