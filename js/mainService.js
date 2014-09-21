myApp.service('mainService', function ($resource) {
    var apiURL = 'http://apiv2.oroszi.net/elvira';
    var api = $resource(apiURL);

    return {
        getMessages: function (params) {
            var get = api.get(params, function (data) {
                return data;
            });
            return get.$promise;
        }
    };
});