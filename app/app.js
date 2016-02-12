(function() {
    var app = angular.module('sendMoney', [
        "smConfig",
        "ngRoute",
        "smLoading",
        "smInitialController",
        "smSendMoneyController",
        "smSuccessController",
        "smHistoryController",
        "smMoneyService"
    ], function() {

    }).config(
        function ( 
            $provide, 
            $httpProvider, 
            $routeProvider,
            SMConfig
        ){

        // Intercept http calls.
        $provide.factory('MyHttpInterceptor', function ($q) {
            return {
                // On request success
                request: function (config) {
                    config.headers.Accept = 'application/json';
                    if(config.url.charAt(0) === '/'){
                        config.url = SMConfig.API_URI + config.url;
                        console.log("Request URL: %s", config.url);
                        console.log("Request Object: %O", config);
                    }
                    return config || $q.when(config);
                },
                responseError: function(rejection) {
                    // do something on error
                    return $q.reject(rejection);
                }
            };
        });


        // Add the interceptor to the $httpProvider.
        $httpProvider.interceptors.push('MyHttpInterceptor');

        $routeProvider.
            when('/', {
                controller: 'initialController',
                templateUrl: 'app/view/initial.html'
            }).
            when('/send-money', {
                controller: 'sendMoneyController',
                templateUrl: 'app/view/sendMoney.html'
            }).
            when('/success/:data', {
                controller: 'successController',
                templateUrl: 'app/view/success.html'
            }).
            when('/history', {
                controller: 'historyController',
                templateUrl: 'app/view/history.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    });

    app.run(function ($rootScope, SMConfig) {


    });

})();
