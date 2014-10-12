'use strict';
angular.module('main',
    [
        'ngTouch',
        'ngAnimate',
        'ngRoute',
        'ngResource',
        'mgcrea.ngStrap',
        'angular-carousel',
        'common'
    ]).config(['$datepickerProvider', '$typeaheadProvider', '$routeProvider',function ($datepickerProvider, $typeaheadProvider, $routeProvider) {
        angular.extend($datepickerProvider.defaults, {
            dateFormat: 'yyyy.MM.dd.',
            startWeek: 1
        });

        angular.extend($typeaheadProvider.defaults, {
            minLength: 2,
            limit: 6
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