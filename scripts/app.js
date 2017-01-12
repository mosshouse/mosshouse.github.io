
(function (angular) {
    'use strict';
    /* See: https://github.com/johnpapa/angular-styleguide:
        "Wrap Angular components in an Immediately Invoked Function Expression (IIFE).
        Why?: An IIFE removes variables from the global scope. This helps prevent variables and function declarations from living longer than expected in the global scope, which also helps avoid variable collisions.
        Why?: When your code is minified and bundled into a single file for deployment to a production server, you could have collisions of variables and many global variables. An IIFE protects you against both of these by providing variable scope for each file." */

    /*angular.module("MainModule", ['router'])
    
    angular.module("MainModule", ['router', 'anchorScrollExample', 'expandAccordionSectionsModule', 'changeArrowsAccordionSectionsModule']) */

    angular.module("MainModule", ['router', 'anchorScrollExample'])


    //Below Code is taken from: https://docs.angularjs.org/api/ng/service/$anchorScroll
       angular.module('anchorScrollExample', [])
           .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
               function ($scope, $location, $anchorScroll) {

                   $anchorScrollProvider.disableAutoScrolling()
                  // $scope.gotoBottom = function () {
                       // set the location.hash to the id of
                       // the element you wish to scroll to.
                    //   $location.hash('info-section-anchor');
                       // call $anchorScroll()
                    //   $anchorScroll();
                   //};
            }]);
    //End of Angular code from https://docs.angularjs.org/api/ng/service/$anchorScroll */

})(window.angular);



