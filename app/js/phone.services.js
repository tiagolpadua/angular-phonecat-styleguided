(function () {
    'use strict';

    /* Services */

    angular.module('phonecatServices', ['ngResource'])
        .factory('phoneResource', phoneResource);

    phoneResource.$inject = ['$resource'];
    function phoneResource($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
        });
    };
})();