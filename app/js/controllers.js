(function () {
    'use strict';

    /* Controllers */

    angular.module('phonecatControllers', [])
        .controller('PhoneListCtrl', PhoneListCtrl)
        .controller('PhoneDetailCtrl', PhoneDetailCtrl);

    PhoneListCtrl.$inject = ['Phone'];
    function PhoneListCtrl(Phone) {
        var vm = this;

        vm.orderProp = 'age';
        vm.phones = Phone.query();
        ////////////
    }

    PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];
    function PhoneDetailCtrl($routeParams, Phone) {
        var vm = this;

        vm.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
            vm.mainImageUrl = phone.images[0];
        });
        vm.setImage = setImage;
        ////////////

        function setImage(imageUrl) {
            vm.mainImageUrl = imageUrl;
        };
    };
})();