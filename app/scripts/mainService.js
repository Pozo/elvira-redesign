'use strict';

angular.module('main')
.service('MainService', ['$http', 'MainServiceConfig', '$q', '$log',
    function ($http, MainServiceConfig, $q) {

        /**
         * @constructor
         */
        var MainService = function () {};

        var p = MainService.prototype;
        p.constructor = MainService;

        p.getTimetable = function (params) {
            var deferResult = $q.defer();
            $http({
                method: 'GET',
                url: MainServiceConfig.apiURL,
                params: params
            }).success(function (data) {
                deferResult.resolve(data);
            }).error(function (data, status) {
                deferResult.reject(status);
            });
            return deferResult.promise;
        };

        return new MainService();
    }]
);