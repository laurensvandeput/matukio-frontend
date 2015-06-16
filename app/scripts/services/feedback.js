angular.module('matukioApp')
  .factory('feedbackService', ['$http', function ($http) {
    return {
      getFeedback: function (type, id) {
        return $http.get('http://tuk.io/feedback/' + id)
          .success(function (data) {
            return data;
          });
      },
      postFeedback: function (type, id, user, feedback, rating) {
        return $http.post('http://tuk.io/' + type + '/' + id + '/feedback', {user: user, rating: rating, feedback: feedback})
          .success(function (data) {
            return data;
          })
          .error(function (err) {
            return err;
          });
      }
    };
  }]);