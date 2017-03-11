/// <reference path="../partials/testPartial.html" />
angular.module('router', ['ngRoute'])
.config(function ($routeProvider) { //Angular dependancy injection 
    $routeProvider
         .when('/index', { templateUrl: 'infoLinks/partials/welcome.html' })
               .when('/index-page-carousel', { templateUrl: 'infoLinks/partials/welcome.html' })


        .when('/accommodation', { templateUrl: 'infoLinks/partials/accommodation-bunclody.html' })

     .when('/accommodation-bunclody', { templateUrl: 'infoLinks/partials/accommodation-bunclody.html' })

        .when('/rooms', { templateUrl: 'infoLinks/partials/accommodation.html' })
        .when('/rooms-carousel', { templateUrl: 'infoLinks/partials/accommodation-bunclody.html' })

        .when('/bar', { templateUrl: 'infoLinks/partials/bar-and-music.html' })
        .when('/bar-and-music', { templateUrl: 'infoLinks/partials/bar-and-music.html' })

        .when('/location', { templateUrl: 'infoLinks/partials/location.html' })

        .when('/bunclody-attractions', { templateUrl: 'infoLinks/partials/bunclody-attractions.html' })



        .otherwise({ templateUrl: 'infoLinks/partials/welcome.html' });
        reloadOnSearch: false;

});




