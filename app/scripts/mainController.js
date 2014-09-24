'use strict';

angular.module('main')
.controller('MainCtrl', ['$scope', '$datepicker', 'MainService',
    function ($scope, $datepicker, MainService) {
        this.selectedDate = new Date();

        this.cities = mav;

        this.discounts = [
            { group : '50%os',id : 1, name: 'asd' },
            { group : '50%os',id : 2, name: 'bbb' },
            { group : '90%os',id : 2, name: 'ccc' }
        ];

        this.submit = function () {
            console.log(this.fromCity);
            console.log(this.toCity);
            console.log(this.cities);
        };
        MainService.getMessages({from: 'Budapest', to: 'Gyor'}).then(function (data) {
            /*console.log(data);
             $scope.deferred.resolve($scope.messages = data); //was: $defer.resolve($scope.messages = data.result);
             */
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    }]
);