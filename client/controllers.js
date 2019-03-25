//.controller('WelcomeController', ['$scope', function($scope) {
//}])
angular.module('chirper.controllers', []) 
.controller('ChirpListController', ['$scope', 'Chirp', 'User', function($scope, Chirp, User) {
    $scopes.chirps = Chirps.query();  //same as getChirps(); 
    $scope.users = User.query();
    

    $scope.createChirp = function() {
        var payload = {           //payload
            message: $scope.newMessage, //gets whatever is typed in chirpField
            userid: $scope.newUserId // here, you would select the select box using JQuery and get its current value///value of select box
        }; 
        var c = new Chirp(payload);
        c.$save(function(success) {  //c.$save makes it do a post request to the collection
            $scope.newMessage = '';
            $scope.newUserId = '';
            getChirps();
        }, function(err) {
            console.log(err);
        });
    }    
}])
.controller('SingleChirpController', ['$scope', 'Chirp', '$routeParams', '$location', function($scope, Chirp, $routeParams, $location) { 
    $scope.chirp = Chirp.get({ id: $routeParams.someId });  //query gets all, get is for one..$scope.chirp is a resource

    $scope.editChirp = function() {
        $location.path('/chirps/' + $routeParams.someId + '/update');
        // window.location.pathname = '/chirps/' + $routeParams.id + '/update';
    }    
    $scope.deleteChirp = function() {
        if (confirm('Are you sure you want to delete this chirp?')) {
            $scope.chirp.$delete(function() {  ///knows to mkae a get request to api/chirps/ and to fill in id b/c we filled in from factory @id, that tells it to fill in own id
                $location.replace().path('/chirps');
            }, function(err) {
                console.log(err);
            })           
        } 
    }      
}])
    
.controller('UpdateChirpController', [ '$scope', 'Chirp', '$location', '$routeParams', function($scope, Chirp, $location, $routeParams) { 
    $scope.chirp = Chirp.get({ id: $routeParams.someId });  //get a specific chirp
    
    $scope.updateChirp = function() {
        $scope.chirp.$update(function() {   //is modeled to chirp.message, take the data and send to server to update
            //$location.path('/chirps/' + $routeParams.someId); //this would erase the history of it, no back to it
            window.history.back();
        }, function(err) {
            console.log(err);
        });    

    }
}]);


