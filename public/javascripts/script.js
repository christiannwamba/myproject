// script.js

    // create the module and name it scotchApp
    var app = angular.module('scotchApp', ['ngRoute', 'ngResource']);

    // configure our routes
    app.config(function($routeProvider){
        $routeProvider
                     
           // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'contact.html',
                controller  : 'contactController'
            })
        
            //route for the contact page
            .when('/register', {
                templateUrl : 'register.html',
                controller : 'registerController'
            })
            
            //route for the login page
            .when('/sign-in', {
                templateUrl : 'sign-in.html',
                controller : 'signinController'
        });
    });

    app.factory('placeService', function($resource){
    	// I am not so good with ngResoures I use $http 
        return $resource('/api/place');
    });
    // create the controller and inject Angular's $scope
    app.controller('mainController', function(placeService, $scope, $rootScope) {
        // create a message to display in our view
        $scope.place = placeService.query();
	    
        
        });
        
    app.controller('placesController', function($scope, $http) {
    	var url = 'http://localhost:3000/api/places';
        $http.get(url).success(function(data){
        	console.log(data);
        });
    });

    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    }); 

    app.controller('registerController', function($scope) {
        $scope.message = 'Join us! JK. This is just a demo.';
    }); 

    app.controller('signinController', function($scope) {
        $scope.message = 'Login. This is just a demo.';
    });
