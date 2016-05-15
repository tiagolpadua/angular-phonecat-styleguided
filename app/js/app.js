(function () {
    'use strict';

    /* App Module */

    //TODO: Rename modules according Y020
    angular.module('phonecatApp', [
        'ngRoute',
        'phonecatAnimations',

        'phonecatControllers',
        'phonecatFilters',
        'phonecatServices'
    ])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl',
                controllerAs: 'vm'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    };
})();