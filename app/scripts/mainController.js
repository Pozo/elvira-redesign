'use strict';

angular.module('main')
.controller('MainCtrl', ['$scope', 'MainService',
    function ($scope, MainService) {

        this.showActions= false;
        this.selectedDate = new Date();

        this.cities = mav;
        this.timeTable = {};

        this.discounts = [
            { group : '50%os',id : 1, name: 'asd' },
            { group : '50%os',id : 2, name: 'bbb' },
            { group : '90%os',id : 2, name: 'ccc' }
        ];
        var that = this;
        this.submit = function (from, to) {
            var that = this;
            MainService.getTimetable({from: from, to: to}).then(function (data) {
                console.log(data);
                that.result = data;
            }, function (error) {
                console.log(error);
            });
//            console.log(this.fromCity);
//            console.log(this.toCity);
//            console.log(this.cities);
        };
        MainService.getTimetable({from: 'Budapest', to: 'Gyor'}).then(function (data) {
            console.log(data);
            that.result = data;
        }, function (error) {
            console.log(error);
        });

        this.activePanel;
    }]
);