'use strict';

/**
 * @ngdoc function
 * @name matukioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the matukioApp
 */


angular.module('matukioApp')
    .controller('EventOverviewCtrl', function ($scope) {
        $scope.events = [
            {eventid:'1', eventtitle:'Event 1',imageurl:'<img src="images/dummy-project.jpg" alt="">', category:'Reading Group'},
            {eventid:'2', eventtitle:'Event 2',imageurl:'<img src="images/dummy-project.jpg" alt="">', category:'Reading Group'},
            {eventid:'3', eventtitle:'Event 3',imageurl:'<img src="images/dummy-project.jpg" alt="">', category:'Reading Group'},
            {eventid:'4', eventtitle:'Event 4',imageurl:'<img src="images/dummy-project.jpg" alt="">', category:'Reading Group'},
            {eventid:'5', eventtitle:'Event 5',imageurl:'<img src="images/dummy-project.jpg" alt="">', category:'Reading Group'},
            {eventid:'6', eventtitle:'Event 6',imageurl:'<img src="images/dummy-project.jpg" alt="">', category:'Reading Group'},
            {eventid:'7', eventtitle:'Event 7',imageurl:'<img src="images/dummy-project.jpg" alt="">', category:'Reading Group'},

        ];
    });