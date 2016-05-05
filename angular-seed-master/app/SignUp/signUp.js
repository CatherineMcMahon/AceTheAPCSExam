'use strict'; //code should be executed in strict mode, no undeclared vars...

// new module w/ the angular.Module api 
// adds firebase module into home.js
var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.config( ['$routeProvider', function($routeProvider) {
		// Set up the routes
}]);

// Setup the HomeCtrl Controller
// We use FireBase to login
myApp.controller('HomeCtrl', ['$scope', function($scope) {
	var firebase = new Firebase("https://acetheapcsexam.firebaseio.com"); 

	var uname = $scope.user.email;
	var pw = $scope.user.password;

	console.log("SIGN UP Called");
	// Sign up 	
	if(email&&password)	{
	firebase.createUser({
  			email : uname,
			password : pw
		}, function(error, userData) {
  			if (error) {
    			console.log("Error creating user:", error);
  			} else {
    			console.log("Successfully created user account with uid:", userData.uid);
  			}
	})};

		//sign in
		firebase.authWithPassword( {
			email : uname,
			password : pw
		}, function(error, user ){
				if(error) {
					// an error occurred	
					console.log(" AUTH ERROR" , error);
				}
				else if( user ) {
					console.log("AUTH SUCCESS");
					window.location.href = '/app/game.html';
				}
				else {
					console.log("USER LOGGED OUT");
				}
		});
	}]); //ends myApp.controller(...)
