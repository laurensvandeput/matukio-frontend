angular.module('matukioApp')
    .factory('eventsService',['$http', function($http) {
        return {
            getEventsOverview: function() {
                return $http.get('http://tuk.io/events').success(function(data){
                    return data;
                });
            }
        };
    }]);