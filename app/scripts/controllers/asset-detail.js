'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:assetDetailCtrl
 * @description
 * # AssetDetailControler
 * Controller of the matukioApp
 */

angular.module('matukioApp')
    .controller('assetDetailCtrl', ['$scope','$http', '$routeParams', 'assetDetailService', function($scope, $http, $routeParams, assetDetailService){

        assetDetailService.getAssetDetail($routeParams.id)
            .success(function(data) {
                $scope.assetDetails = data[0];
            });

    }]);


