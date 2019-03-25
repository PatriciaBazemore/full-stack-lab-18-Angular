angular.module('chirper.factories', [])
.factory('Chirp' ['$resource', function($resource) {
    return $resource('/api/chirps/:id', { id: '@id'}, {  //must always tell it where to find the one, the other is a if you don't fill in i put this
        update: {
            method: 'PUT'
        }
    });
}])
.factory('User', ['$resource', function($resource) {  //need a factory for every resource
    return $resource('/api/users/:id');  //must have the specific, not just users/ 
}]) 