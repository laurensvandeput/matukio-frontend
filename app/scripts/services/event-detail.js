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
            },
            getSessions: function (eventID) {
                return $http.get('http://tuk.io/sessions/' + eventID)
                    .success(function (sessions) {
                        return sessions;
                    })
                    .error(function (error) {
                        return error;
                    });
            }
        };
    }]);
