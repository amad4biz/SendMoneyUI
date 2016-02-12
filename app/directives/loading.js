(function() {
    var app = angular.module('smLoading', [], function() {
    });

    app.directive('loading', function() {
       return {
           restrict: "E",
           templateUrl: 'app/view/loading.html'
       };
    });


})()
