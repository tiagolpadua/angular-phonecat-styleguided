(function () {
    'use strict';

    angular.module('phonecatServices', ['ngResource'])
        .factory('phoneResource', phoneResource);

    phoneResource.$inject = ['$resource'];
    function phoneResource($resource) {
        return $resource('content/data/:phoneId.json', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    }
})();
