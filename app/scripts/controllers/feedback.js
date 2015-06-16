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
        console.log($scope.feedback);
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

      // TODO don't hardcode type!
      feedbackService.postFeedback('asset', $routeParams.id, $scope.user, $scope.feedback, $scope.rating);

    }

  }]);


