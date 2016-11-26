/// <reference path="../partials/testPartial.html" />
angular.module('router', ['ngRoute'])
.config(function ($routeProvider) { //Angular dependancy injection 
    $routeProvider
                .when('/rooms', { templateUrl: 'infoLinks/partials/rooms.html' })
         .when('/bar', { templateUrl: 'infoLinks/partials/bar.html' })
        .when('/location', { templateUrl: 'infoLinks/partials/location.html' })
        .when('/nearby', { templateUrl: 'infoLinks/partials/nearby.html' })
        .when('/test', { template: '<h3>Test Page</h3>' })

    .otherwise({ templateUrl: 'infoLinks/partials/rooms.html' });
    reloadOnSearch: false;

});




