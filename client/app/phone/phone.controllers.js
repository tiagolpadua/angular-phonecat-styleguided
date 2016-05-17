(function () {
    'use strict';

    angular.module('phonecatControllers', [])
        .controller('PhoneListController', PhoneListController)
        .controller('PhoneDetailController', PhoneDetailController);

    PhoneListController.$inject = ['phoneResource'];
    function PhoneListController(phoneResource) {
        var vm = this;

        vm.orderProp = 'age';
        vm.phones = phoneResource.query();
        ////////////
    }

    PhoneDetailController.$inject = ['$routeParams', 'phoneResource'];
    function PhoneDetailController($routeParams, phoneResource) {
        var vm = this;
        vm.setImage = setImage;

        activate();

        ////////////
        function activate() {
            vm.phone = phoneResource.get({phoneId: $routeParams.phoneId}, function (phone) {
                vm.mainImageUrl = phone.images[0];
            });
        }

        function setImage(imageUrl) {
            vm.mainImageUrl = imageUrl;
        }
    }
})();
