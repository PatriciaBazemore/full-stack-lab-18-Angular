
angular.module('myApp.controllers', []) 
.controller('WelcomeController', ['$scope', function($scope) {
    
}])
.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/api/chirps'
    }).then(function(response) {
        $scope.chirps = response.data;
    }), function(err) {
        console.log(err);
    } 
    $http({
        method: 'GET',
        url: '/api/users'  
    }).then(function(response) {
        $scope.users = response.data;
    }), function(err) {
        console.log(err);
    }
}])
.controller('SingleViewController', [ '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) { 
    $http({
        url: '/api/chirps/' + $routeParams.id,
        method: 'GET'
    }).then(function(response) {
        $scope.chirp = response.data;
    }), function(err) {
        console.log(err);
    }
    // .then 'bind to make new data show up on screen'
    //         'deletebtn.click= del req to server'
    //         'redirect to list page when successful'
}])

.controller('UpdateController', [ '$scope', '$http', '$routeParams', function($scope, $http, $routeParams) { 
    
}])


 $scope.deleteChirp= function() {
    if (confirm('Are you sure you want to delete this chirp?')) {
            $scope.chirp.$delete(function() { //kicks of request to delete currect pizza, probaby want to return to list view after this
                window.history.back();
         }, function(err) {
         console.log(err);
         });