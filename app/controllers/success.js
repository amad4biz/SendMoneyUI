(function() {

    var app = angular.module('smSuccessController', [], function() {
    });

    app.controller('successController', [
        '$scope',
        '$location',
        '$routeParams',
        'moneyService',
        function($scope, $location, $routeParams, moneyService) {

            console.log("route params :", $routeParams.data);
            $scope.data = JSON.parse($routeParams.data);

            $scope.messageSuccess = 'You have sent '+$scope.data.currency.id+$scope.data.amount+' '+$scope.data.currency.name+' to '+$scope.data.to;

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
