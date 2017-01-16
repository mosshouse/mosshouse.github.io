/// <reference path="../partials/testPartial.html" />
angular.module('router', ['ngRoute'])
.config(function ($routeProvider) { //Angular dependancy injection 
    $routeProvider
         .when('/index', { templateUrl: 'infoLinks/partials/welcome.html' })
        .when('/rooms', { templateUrl: 'infoLinks/partials/rooms.html' })
        .when('/rooms-carousel', { templateUrl: 'infoLinks/partials/rooms.html' })
        .when('/bar', { templateUrl: 'infoLinks/partials/bar.html' })
        .when('/location', { templateUrl: 'infoLinks/partials/location.html' })
        .when('/attractions', { templateUrl: 'infoLinks/partials/attractions.html' })
        .when('/test', { template: '<h3>Test Page</h3>' })

        .otherwise({ templateUrl: 'infoLinks/partials/welcome.html' });
        reloadOnSearch: false;

});




