'use strict';

angular.module('main')
.controller('MainCtrl', ['$scope', 'MainService','logger',
    function ($scope, MainService, logger) {

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
                logger.logSuccess('Data received!', data, null, true);
                that.result = data;
            }, function (error) {
                logger.logError('Error getting data', error, null, true);
            });
//            console.log(this.fromCity);
//            console.log(this.toCity);
//            console.log(this.cities);
        };
        MainService.getTimetable({from: 'Budapest', to: 'Gyor'}).then(function (data) {
            logger.logSuccess('Data received!', data, null, true);
            that.result = data;
        }, function (error) {
            logger.logError('Error getting data', error, null, true);
        });

//        this.activePanel;
    }]
);