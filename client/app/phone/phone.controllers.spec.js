'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function () {

    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('phonecatApp'));
    beforeEach(module('phonecatServices'));

    describe('PhoneListController', function () {
        var scope, vm, $httpBackend;

        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('content/data/phones.json').
                respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);

            scope = $rootScope.$new();
            vm = $controller('PhoneListController', { $scope: scope });
        }));


        it('should create "phones" model with 2 phones fetched from xhr', function () {
            expect(vm.phones).toEqualData([]);
            $httpBackend.flush();

            expect(vm.phones).toEqualData(
                [{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
        });


        it('should set the default value of orderProp model', function () {
            expect(vm.orderProp).toBe('age');
        });
    });


    describe('PhoneDetailController', function () {
        var scope, $httpBackend, vm,
            xyzPhoneData = function () {
                return {
                    name: 'phone xyz',
                    images: ['image/url1.png', 'image/url2.png']
                }
            };


        beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('content/data/xyz.json').respond(xyzPhoneData());

            $routeParams.phoneId = 'xyz';
            scope = $rootScope.$new();
            vm = $controller('PhoneDetailController', { $scope: scope });
        }));


        it('should fetch phone detail', function () {
            expect(vm.phone).toEqualData({});
            $httpBackend.flush();

            expect(vm.phone).toEqualData(xyzPhoneData());
        });
    });
});
