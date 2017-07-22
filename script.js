var app = angular.module("electronics", ['ngRoute']); // dependency added

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'folder/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'folder/about.html',
            controller: 'MainCtrl'
        })    
        .when('/services', {
            templateUrl: 'folder/services.html',
            controller: 'ServicesCtrl'
        })
        .when('/contact', {
            templateUrl: 'folder/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({ redirectTo: '/main' });
}]);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('data/services.json').then(function(response) {
       $scope.services = response.data; 
    });
}]);

app.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('data/services.json').then(function(response) {
        $scope.services = response.data;
    });
}]);

app.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('data/locations.json').then(function(response) {
       $scope.locations = response.data; 
    });
}]);