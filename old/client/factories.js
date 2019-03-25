




angular.module('myApp.factories', []) //create module
.factory('ChirpFactory', [function() {
    var f = {};

    f.getChirp = function() {
        
    }

    return f;
}])
.factory('Chirp', ['$resource', function($resource) {  //creates our Pizza factory
         return $resource('http://localhost:3000/api/chirps/:id', { id: '@id'}, {
             update: {
                 method: 'PUT'  
             }
         });
}]);
