var myApp = angular.module('main',
[
    'ngRoute',
    'ngResource',
    'mgcrea.ngStrap'
]).config(function ($datepickerProvider) {
    angular.extend($datepickerProvider.defaults, {
        dateFormat: 'dd/MM/yyyy',
        startWeek: 1
    });
});