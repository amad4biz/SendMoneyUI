'use strict';

(function() {
    var app = angular.module('smConfig', []);

    app.constant('SMConfig', {
      API_URI: 'http://localhost:3000'
    });
})()
