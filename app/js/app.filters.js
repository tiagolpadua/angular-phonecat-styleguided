(function () {
    'use strict';

    /* Filters */

    angular.module('phonecatFilters', [])
        .filter('checkmark', checkmark);

    checkmark.$inject = [];
    function checkmark() {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    };
})();