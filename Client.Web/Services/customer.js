angular.module('Services')

.service('CustomerService', ['$http',

    function ($http) {

        return {

            AddCustomer: function (callback) {

                $http.get('http://localhost:8888/Customer/AddCustomer')
                     .then(callback);

            }

        };

    }

]);