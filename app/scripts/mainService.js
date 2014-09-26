'use strict';

angular.module('main')
.service('MainService', ['$http', 'MainServiceConfig', '$q', '$log',
    function ($http, MainServiceConfig, $q, $log) {

        /**
         * @constructor
         */
        var MainService = function () {};

        var p = MainService.prototype;
        p.constructor = MainService;

        p.getMessages = function (params) {
            var deferResult = $q.defer();
            $http({
                method: 'GET',
                url: MainServiceConfig.apiURL,
                params: params
            }).success(function (data) {
                deferResult.resolve(data);
            }).error(function (data, status) {
                $log.error('Couldn\'t fetch data: '+status);
                $log.debug(data);
                deferResult.reject(status);
            });
            return deferResult.promise;
        };

        return new MainService();
    }]
);