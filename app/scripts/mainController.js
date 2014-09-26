'use strict';

angular.module('main')
.controller('MainCtrl', ['$scope', 'MainService',
    function ($scope, MainService) {

        this.selectedDate = new Date();

        this.cities = mav;
        this.messages = {};

        this.discounts = [
            { group : '50%os',id : 1, name: 'asd' },
            { group : '50%os',id : 2, name: 'bbb' },
            { group : '90%os',id : 2, name: 'ccc' }
        ];

        this.submit = function (from, to) {
            var that = this;
            MainService.getMessages({from: from, to: to}).then(function (data) {
                console.log(data);
                that.messages = data;
            }, function (error) {
                console.log(error);
            });
//            console.log(this.fromCity);
//            console.log(this.toCity);
//            console.log(this.cities);
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