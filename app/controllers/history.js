(function() {

    var app = angular.module('smHistoryController', [], function() {
    });

    app.controller('historyController', [
        '$scope',
        '$location',
        'moneyService',
        function($scope, $location, moneyService) {

            moneyService.transactionHistory().then(function(data) {
                console.log("Transaction Details", data) ;
                $scope.transactionDetails = data;
            }, function(err) {
                console.log("Error sending money");
            });

            $scope.back = function() {
                console.log("Back clicked");
                $location.url('/initial');
            };
        }
    ]);


})();
