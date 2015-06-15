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
    .controller('EventCtrl', function ($scope) {
        $scope.events = [
            {eventid:'1', eventtitle:'Event 1',imageurl:'images/dummy-project.jpg', category:'Reading Group'},
            {eventid:'2', eventtitle:'Event 2',imageurl:'images/dummy-project.jpg', category:'Reading Group'},
            {eventid:'3', eventtitle:'Event 3',imageurl:'images/dummy-project.jpg', category:'Reading Group'},
            {eventid:'4', eventtitle:'Event 4',imageurl:'images/dummy-project.jpg', category:'Reading Group'},
            {eventid:'5', eventtitle:'Event 5',imageurl:'images/dummy-project.jpg', category:'Reading Group'},
            {eventid:'6', eventtitle:'Event 6',imageurl:'images/dummy-project.jpg', category:'Reading Group'},
            {eventid:'7', eventtitle:'Event 7',imageurl:'images/dummy-project.jpg', category:'Reading Group'},

        ];
    });
