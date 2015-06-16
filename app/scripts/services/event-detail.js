angular.module('matukioApp')
    .factory('eventDetailService', ['$http', function ($http) {
        return {
            getEventDetail: function (eventID) {
                return $http.get('http://tuk.io/event/' + eventID)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return err;
                    });
            }
        };
    }]);