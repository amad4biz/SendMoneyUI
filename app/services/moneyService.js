(function(){

    var app = angular.module('smMoneyService', [], function() {
    });

    app.service('moneyService', function($http, $q, $rootScope) {

        this.sendMoney = function(sendDetails) {
            var deferred = $q.defer();
            var url = "/sendMoney";
            $http.post(url , sendDetails).success(function(data){
                console.log("Send Money successful", data);
                deferred.resolve(data);
            }).error(function(error) {
                console.log('error during sending money', error);
                deferred.reject(error);
            });
            return deferred.promise;
        };

        this.transactionHistory = function() {
            var deferred = $q.defer();
            var url = "/history";
            $http.get(url).success(function(data){
                console.log("Transaction History successful", data);
                deferred.resolve(data);
            }).error(function(error) {
                console.log('error during getting transaction history', error);
                deferred.reject(error);
            });

            return deferred.promise;
        };

        //this.sendMoney = function(sendDetails) {
        //    var deferred = $q.defer();
        //
        //    var data = {
        //        "message" : "Send Money successful"
        //    }
        //
        //    deferred.resolve(data);
        //    return deferred.promise;
        //};
        //
        //this.transactionHistory = function() {
        //    var deferred = $q.defer();
        //
        //    var data = [
        //        {
        //            "sentOn" : "12/5/2013",
        //            "sentTo" : "John Doe",
        //            "amount" : 123.45,
        //            "currency" : "$"
        //        },
        //        {
        //            "sentOn" : "12/1/2013",
        //            "sentTo" : "Starbucks",
        //            "amount" : 3.34,
        //            "currency" : "$"
        //        },
        //        {
        //            "sentOn" : "11/22/2013",
        //            "sentTo" : "Jane Jones",
        //            "amount" : 10.00,
        //            "currency" : "$"
        //        },
        //        {
        //            "sentOn" : "11/6/2013",
        //            "sentTo" : "Applebee",
        //            "amount" : 35.42,
        //            "currency" : "$"
        //        }
        //    ];
        //    deferred.resolve(data);
        //    return deferred.promise;
        //};

    });

})()
