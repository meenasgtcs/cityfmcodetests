
var homeApp = angular.module('productApp', []);
homeApp.controller('productController', function ($scope, $http) {
    
    $scope.viewProducts = function () {
        document.getElementById('showDiv').style.display = "block";
        var key = 'API-ZIDYMU9GOQ26UKY';
        
        $http({
            method: 'get',
            //Directly access the api with key but localhost is blocked.NO CORS 

           // url: 'https://alltheclouds.com.au/api/Products/?api-key=' + key,
           url: 'Products.json',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:44351',
                'Content-Type': 'application/json',
                'Authorization': 'Basic VGVzdDp0ZXN0QHRlc3QuY29t'
            },
            data: { 'grant_type': 'password', 'Email':'Test', 'password':'test@test.com' }
           

        }).then(function mySuccess(response) {
            $scope.products = angular.fromJson(response.data);
            console.log($scope.product[0].name);

        });
    };

});
