'use strict';

angular.module('main')
    .service('mainService', ['$resource',function ($resource) {
        var apiURL = 'http://apiv2.oroszi.net/elvira';
        var api = $resource(apiURL);
        console.dir(api);
        return {
            getMessages: function (params) {
                var get = api.get(params, function (data) {
                    return data;
                });
                return get.$promise;
            }
        };
    }]
);