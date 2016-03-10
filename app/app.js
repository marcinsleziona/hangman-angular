

var hangmanApp = angular.module('hangmanApp', ['ngRoute']);

// This configures the routes and associates each route with the view
hangmanApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HangmanController',
            templateUrl: 'app/partials/view1.html'
        })
        .otherwise({redirectTo: '/'});
});

