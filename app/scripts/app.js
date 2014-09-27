'use strict';
angular.module('main',
    [
        'ngRoute',
        'ngResource',
        'mgcrea.ngStrap'
    ]).config(['$datepickerProvider','$routeProvider',function ($datepickerProvider, $routeProvider) {
        angular.extend($datepickerProvider.defaults, {
            dateFormat: 'yyyy.MM.dd.',
            startWeek: 1
        });

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'mainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);