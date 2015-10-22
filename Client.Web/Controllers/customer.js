angular.module('Controllers')

.controller('CustomerController', ['$scope', 'CustomerService',

    function ($scope, CustomerService) {

        angular.extend($scope, {

            AddedCustomer: 'None.',

            AddCustomer: function () {

                CustomerService.AddCustomer(function (customer) {

                    $scope.AddedCustomer = customer.data;

                });

            }

        });

    }

])