(function () {
    'use strict';

    angular.module('phonecatApp')
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'app/phone/phone-list.html',
                controller: 'PhoneListController',
                controllerAs: 'vm'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'app/phone/phone-detail.html',
                controller: 'PhoneDetailController',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }
})();
