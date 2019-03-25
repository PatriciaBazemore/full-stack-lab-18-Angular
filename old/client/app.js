angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller:  'WelcomeController'
    })
    .when('/chirps', {
        templateUrl: 'list.html',
        controller: 'ListController'
    })
    .when('/chirps/:id', {
        templateUrl: 'single_view.html',
        controller: 'SingleViewController'
    })
    .when('/chirps/:id/update', {
        templateUrl: 'single_update.html',
        controller: 'UpdateController'
    })
    .otherwise({
        redirectTo: '/'
    })
}]);


