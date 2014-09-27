'use strict';
angular.module('main',
    [
        'ngTouch',
        'ngAnimate',
        'ngRoute',
        'ngResource',
        'mgcrea.ngStrap'
    ]).config(['$datepickerProvider','$routeProvider',function ($datepickerProvider, $routeProvider) {
        angular.extend($datepickerProvider.defaults, {
            dateFormat: 'dd/MM/yyyy',
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