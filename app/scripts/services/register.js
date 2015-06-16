angular.module('matukioApp')
  .factory('registerService', ['$http', function ($http) {
    return {
      registerUser: function (id, name) {
        return $http.get('http://ma.tuk.io/backend/event/' + id + '/register/' + name)
          .success(function (data) {
            return data;
          });
      },
      unregisterUser: function (id, name) {
        return $http.get('http://ma.tuk.io/backend/event/' + id + '/unregister/' + name)
          .success(function (data) {
            return data;
          });
      }
    };
  }]);
