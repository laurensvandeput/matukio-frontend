'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:assetFeedbackCtrl
 * @description
 * # AssetFeedbackControler
 * Controller of the matukioApp
 */

angular.module('matukioApp')
  .controller('assetFeedbackCtrl', ['$scope','$http', '$routeParams', 'feedbackService', function($scope, $http, $routeParams, feedbackService){

    feedbackService.getFeedback('asset', $routeParams.id)
      .success(function (data) {
        $scope.feedback = data;
      })

  }]);


