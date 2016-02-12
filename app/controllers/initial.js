(function() {

    var app = angular.module('smInitialController', [], function() {
    });

    app.controller('initialController', [
        '$scope',
        '$location',
        'moneyService',
        function($scope, $location, moneyService) {

            $scope.sendMoney = function() {
                console.log("Send Money clicked");
                $location.url('/send-money');
            };

            $scope.viewHistory = function() {
                console.log("View History clicked");
                $location.url('/history');
            };
        }
    ]);


})();
