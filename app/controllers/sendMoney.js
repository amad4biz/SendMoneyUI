(function() {

    var app = angular.module('smSendMoneyController', [], function() {
    });

    app.controller('sendMoneyController', [
        '$scope',
        '$location',
        '$window',
        'moneyService',
        '$rootScope',
        function($scope, $location, $window, moneyService, $rootScope) {

            $scope.isInvalid = function(field){
                //console.log("Field Name in login :" , field);
                return $scope.sendMoneyForm[field].$invalid && $scope.sendMoneyForm[field].$dirty;
            };

            $scope.isValid = function(field){
                return $scope.sendMoneyForm[field].$valid && $scope.sendMoneyForm[field].$dirty;
            };

            $scope.sendMoney = function() {
                console.log("Send Money clicked");

                var sendDetails = {
                    "to" : $scope.toText,
                    "amount" : $scope.amountText,
                    "currency" : $scope.currencySelect,
                    "message" : $scope.messageText,
                    "reason" : $scope.reasons[$scope.selectedRow]
                };

                console.log("Money details : ", sendDetails);

                $rootScope.showLoading = true;
                moneyService.sendMoney(sendDetails).then(function(data) {
                    console.log("Money Sent", data) ;
                    var finalData = JSON.stringify(sendDetails);
                    $location.url('/success/'+finalData);
                }, function(err) {
                    console.log("Error sending money");
                }).finally(function(){
                    $rootScope.showLoading = false;
                });
            };

            $scope.clear = function() {
                console.log("Clear clicked");
                $window.location.reload();
            };

            $scope.currencies = [
                {id: '$', name: 'USD'},
                {id: 'EUR', name: 'EUR'},
                {id: 'JPY', name: 'JPY'}
            ];
            $scope.currencySelect = $scope.currencies[0];

            $scope.reasons = [
                {id: "I'm sending money to family or friends", name: "I'm sending money to family or friends"},
                {id: "I'm paying for goods or services", name: "I'm paying for goods or services"}
            ];

            $scope.selectedRow = 0;  // initialize our variable to null
            $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
                $scope.selectedRow = index;
            }
        }
    ]);


})();
