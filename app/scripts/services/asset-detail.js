angular.module('matukioApp')
    .factory('assetDetailService', ['$http', function ($http) {
        return {
            getAssetDetail: function (assetID) {
                return $http.get('http://tuk.io/assets/' + assetID)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return err;
                    });
            }
        };
    }]);