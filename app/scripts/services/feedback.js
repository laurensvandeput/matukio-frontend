angular.module('matukioApp')
  .factory('feedbackService', ['$http', function ($http) {
    return {
      getFeedback: function (type, id) {
        return $http.get('http://ma.tuk.io/backend/feedback/' + id)
          .success(function (data) {
            return data;
          });
      },
      postFeedback: function (type, id, user, feedback, rating) {

        var transform = function (data) {
          return $.param(data);
        };

        return $http.post('http://ma.tuk.io/backend/' + type + '/' + id + '/feedback',
          {user: user, rating: rating, feedback: feedback}, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
          })
          .success(function (data) {
            return data;
          })
          .error(function (err) {
            return err;
          });
      }
    };
  }]);
