myApp.controller('MainCtrl', function ($scope, $resource, $datepicker, $q, mainService) {
    $scope.selectedDate = new Date();
    $scope.fromCity;
    $scope.toCity;
    $scope.discount;

    $scope.cities = mav;

    $scope.discounts = [
        { group : '50%os',id : 1, name: 'asd' },
        { group : '50%os',id : 2, name: 'bbb' },
        { group : '90%os',id : 2, name: 'ccc' }
    ];

    $scope.messages;
    $scope.deferred = $q.defer();

    $scope.submit = function () {
        console.log($scope.fromCity);
        console.log($scope.toCity);
        console.log($scope.cities);
    }
    mainService.getMessages({from: 'Budapest', to: 'Gyor'}).then(function (data) {
        /*console.log(data);
         $scope.deferred.resolve($scope.messages = data); //was: $defer.resolve($scope.messages = data.result);
         */
        console.log(data);
    }, function (error) {
        console.log(error);
    });
});