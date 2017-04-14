angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      /* FIX ME */
      return $http({
        method:'post',
        url: '/api/login',
        data: user

      }).then(function (response){
          return response});
    };

    this.getFriends = function() {
    	/* FIX ME */
      return $http({
        method: 'get',
        url: '/api/profiles',

      }).then(function (response){
          return response});
    };
  
});
